var Transaction = require("ethereumjs-tx");
var web3 = require("./web3.instance.js");
var $ = require("jquery");

var FAUCET_ADDRESS = '0xd3e0f69bdb56e46d0a15a9338a4cde0e814be6f7';
var ONE_FINEY = '0x038d7ea4c68000';
var FAUCET_PKEY = new Buffer('bc6bb462e38af7da48e0ae7b5cbae860141c04e5af2cf92328cd6548df111fcb', 'hex');

module.exports = function(address) {
        var dfd = $.Deferred();

        var tx = new Transaction({
            from: FAUCET_ADDRESS,
            to: address,
            value: ONE_FINEY,
            nonce: '0x00',

            gasPrice: '0x09184e72a000',
            gasLimit: '0x2710'
        });

        tx.sign(FAUCET_PKEY);

        web3.eth.sendRawTransaction(tx.serialize().toString('hex'), function(err, txHash) {
            if (err) {
                dfd.reject(err);

            } else {
                var blockFilter = web3.eth.filter('latest');
                blockFilter.watch(function() {
                    dfd.resolve(arguments);
                    blockFilter.stopWatching();
                    /*                    web3.eth.getTransactionReceipt(txHash, function(err, receipt) {
                                            if (err) return console.error(err);
                                            if (receipt) {
                                                blockFilter.stopWatching();
                                                console.log(receipt);
                                            }
                                        });
                    */
                });

            }
        });

        return dfd.promise();
    }