var ContractCfg = require("./contract.config.js");
var Contract = require("./contract.js");
var $ = require("jquery");
var ethUtil = require("ethereumjs-util");

var web3 = require("./web3.instance.js");
web3.eth.defaultAccount = '0xdedb49385ad5b94a16f236a6890cf9e0b1e30392';


var auditory = Contract.fromConfig(ContractCfg.Auditory, web3);
var blockchains = Contract.fromConfig(ContractCfg.Blockchains, web3);
var voting = Contract.fromConfig(ContractCfg.Voting, web3);

var context = {

};

auditory.with(context).getByIndex(1).done(function(size) {
    console.log(arguments);
});


var faucet = require('./faucet.js');

$(document).ready(function() {
    $('#reg-voter').click(function() {
        var username = $('#username').val();
        var company = $('#company').val();
        var seed = $('#userpass').val();



        var ctx = {
                seedHash: web3.sha3(seed).replace('0x', '')
            }
            /*        auditory.with(ctx).add(username, company).done(function() {

                    })*/

        console.log(username);
        console.log(company);
        console.log(seed);
        console.log(ctx);

        var privateKey = web3.sha3(seed).replace('0x', '')
        var address = '0x' + ethUtil.privateToAddress(new Buffer(privateKey, 'hex')).toString('hex');

        web3.eth.defaultAccount = address;

        if (!web3.eth.getBalance(address).toNumber()) {
            faucet.gift(address).done(function() {
                console.log('gifted: ')
                console.log(arguments);
            })
            var tx = new Tx({
                from: FAUCET_ADDRESS,
                to: address,
                value: ONE_FINEY,
                nonce: '0x00',
                
                gasPrice: '0x09184e72a000',
                gasLimit: '0x2710'
            });

            tx.sign(new Buffer(web3.sha3('xxx').replace('0x', ''), 'hex'));

            web3.eth.sendRawTransaction(tx.serialize().toString('hex'), function(err, txHash) {
                var blockFilter = web3.eth.filter('latest');
                blockFilter.watch(function() {
                    console.log(arguments);
                    /*                    web3.eth.getTransactionReceipt(txHash, function(err, receipt) {
                                            if (err) return console.error(err);
                                            if (receipt) {
                                                blockFilter.stopWatching();
                                                console.log(receipt);
                                            }
                                        });
                    */
                });
            });
        }

        console.log(web3.eth.getBalance(address).toNumber());
    });
});
