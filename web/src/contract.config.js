var contracts = {
  Auditory: {
    address: '0x17956ba5f4291844bc25aedb27e69bc11b5bda39',
    abi: [{
      "constant": true,
      "inputs": [{
        "name": "key",
        "type": "bytes32"
      }],
      "name": "contains",
      "outputs": [{
        "name": "",
        "type": "bool"
      }],
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "name": "ind",
        "type": "uint256"
      }],
      "name": "getByIndex",
      "outputs": [{
        "name": "name",
        "type": "string"
      }, {
        "name": "company",
        "type": "string"
      }],
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "name": "addr",
        "type": "address"
      }],
      "name": "getByAddress",
      "outputs": [{
        "name": "name",
        "type": "string"
      }, {
        "name": "company",
        "type": "string"
      }],
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "size",
      "outputs": [{
        "name": "",
        "type": "uint256"
      }],
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "name": "name",
        "type": "string"
      }, {
        "name": "company",
        "type": "string"
      }],
      "name": "add",
      "outputs": [],
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "name": "addr",
        "type": "address"
      }],
      "name": "exists",
      "outputs": [{
        "name": "",
        "type": "bool"
      }],
      "type": "function"
    }, {
      "inputs": [],
      "type": "constructor"
    }]
  },
  Blockchains: {
    address: '0xdf315f7485c3a86eb692487588735f224482abe3',
    abi: [{
      "constant": true,
      "inputs": [{
        "name": "key",
        "type": "bytes32"
      }],
      "name": "contains",
      "outputs": [{
        "name": "",
        "type": "bool"
      }],
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "size",
      "outputs": [{
        "name": "",
        "type": "uint256"
      }],
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "name": "index",
        "type": "uint256"
      }],
      "name": "get",
      "outputs": [{
        "name": "code",
        "type": "string"
      }, {
        "name": "name",
        "type": "string"
      }, {
        "name": "imageUrl",
        "type": "string"
      }],
      "type": "function"
    }, {
      "inputs": [],
      "type": "constructor"
    }]
  },
  Voting: {
    address: '0x06b179aabf198ced0f98c8ceca905a920a137ef4',
    abi: [{
      "constant": false,
      "inputs": [{
        "name": "proposalId",
        "type": "uint256"
      }],
      "name": "vote",
      "outputs": [],
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [{
        "name": "",
        "type": "string"
      }],
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "voters",
      "outputs": [{
        "name": "",
        "type": "address"
      }],
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "name": "",
        "type": "uint256"
      }],
      "name": "result",
      "outputs": [{
        "name": "",
        "type": "uint256"
      }],
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "proposals",
      "outputs": [{
        "name": "",
        "type": "address"
      }],
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "votersCount",
      "outputs": [{
        "name": "",
        "type": "uint256"
      }],
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "name": "",
        "type": "address"
      }],
      "name": "voted",
      "outputs": [{
        "name": "",
        "type": "bool"
      }],
      "type": "function"
    }, {
      "constant": false,
      "inputs": [],
      "name": "start",
      "outputs": [],
      "type": "function"
    }, {
      "constant": false,
      "inputs": [],
      "name": "finish",
      "outputs": [],
      "type": "function"
    }, {
      "inputs": [{
        "name": "_name",
        "type": "string"
      }, {
        "name": "_proposals",
        "type": "address"
      }, {
        "name": "_voters",
        "type": "address"
      }],
      "type": "constructor"
    }]
  }
};

module.exports = contracts;