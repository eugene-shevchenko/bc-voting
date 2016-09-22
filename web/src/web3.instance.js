var sandboxId = '1f5f070e51';
var url = 'https://' + window.location.hostname + ':8555/sandbox/' + sandboxId;

var Web3 = require('web3');
var instance = new Web3(new Web3.providers.HttpProvider(url));

module.exports = instance;