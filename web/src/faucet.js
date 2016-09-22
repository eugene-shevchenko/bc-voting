var Transaction = require("ethereumjs-tx");
var web3 = require("./web3.instance.js");
var $ = require("jquery");

var FAUCET_ADDRESS = '0xd3e0f69bdb56e46d0a15a9338a4cde0e814be6f7';
var ONE_FINEY = '0x038d7ea4c68000';
var FAUCET_PKEY = new Buffer('bc6bb462e38af7da48e0ae7b5cbae860141c04e5af2cf92328cd6548df111fcb', 'hex');

module.exports = function(address) {
    var dfd = $.Deferred();
    
    return dfd.promise();
}