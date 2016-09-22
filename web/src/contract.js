var _ = require("underscore");
var async = require('async');
var Transaction = require("ethereumjs-tx");
var SolidityFunction = require('web3/lib/web3/function');
var web3 = require("./web3.instance.js");
var $ = require("jquery");


var Contract = function(address, abi) {
    var self = this,
        contract = web3.eth.contract(abi).at(address),
        grouped = _.groupBy(abi, 'type');

    _.each(grouped.function, function(func) {

        self[func.name] = function() {
            var args = _.toArray(arguments);
            var dfd = $.Deferred();
            var ctx = self.ctx;

            if (func.constant) {
                ctx.tx && args.push(ctx.tx);
                args.push(function(err, result) {
                    if (err) {
                        dfd.reject(err);
                        console.log(self.name + '.' + func.name + '(...) execution error: ' + err);
                    } else {
                        dfd.resolve(result);
                    }
                });

                contract[func.name].apply(contract, args);
            } else {

                async.parallel({
                    nonce: web3.eth.getTransactionCount.bind(web3.eth, web3.eth.defaultAccount),
                    gasPrice: web3.eth.getGasPrice.bind(web3.eth)
                }, function(err, results) {

                    if (err) {
                        dfd.reject(err);
                        return;
                    }

                    var func = new SolidityFunction(web3, func, address);
                    var data = func.toPayload(args).data;

                    var tx = new Transaction({
                        to: address,
                        nonce: results.nonce,
                        gasLimit: '0x100000',
                        gasPrice: '0x' + results.gasPrice.toString(16),
                        data: data
                    });
                    tx.sign(new Buffer(self.ctx.seedHash, 'hex'));

                    web3.eth.sendRawTransaction('0x' + tx.serialize().toString('hex'), function(err, txHash) {
                        if (err) {
                            dfd.reject(err);
                            return;
                        }

                        var lastBlock = web3.eth.filter('latest');
                        lastBlock.watch(function() {
                            web3.eth.getTransactionReceipt(txHash, function(err, receipt) {
                                if (err) {
                                    dfd.reject(err);
                                } else if (receipt) {
                                    lastBlock.stopWatching();
                                    dfd.resolve(receipt);
                                }
                            });
                        });
                    });
                });
            }

            return dfd.promise();
        };

    });

    _.extend(this, {
        origin: contract,
        ctx: {}
    });
};

Contract.prototype.with = function(context) {
    context && (this.ctx = context);
    return this;
};

Contract.fromConfig = function(cfg) {
    return new Contract(cfg.address, cfg.abi);
};

module.exports = Contract;