import "Container.sol";

contract Blockchains is Container {
    
    struct Tech {
        string code;
        string name;
        string imageUrl;
    }
    
    Tech[] techs;
    
    function Blockchains() {
        add("BTC", "Bitcoin", "https://coinmarketcap.com/static/img/coins/16x16/bitcoin.png");
        add("ETH", "Ethereum", "https://coinmarketcap.com/static/img/coins/16x16/ethereum.png");
        add("NXT", "Nxt", "https://coinmarketcap.com/static/img/coins/16x16/nxt.png");
        add("BTS", "BitShares", "http://coinmarketcap.com/static/img/coins/16x16/bitshares.png");
    }
    
    function add(string code, string name, string imageUrl) internal {
        techs.push(Tech(code, name, imageUrl));
    }
    
    function get(uint index) constant returns (string code, string name, string imageUrl) {
        Tech tech = techs[index];
        code = tech.code;
        name = tech.name;
        imageUrl = tech.imageUrl;
    }

    function size() constant returns (uint) {
        return techs.length;
    }
    
    function contains(bytes32 key) constant returns (bool) {
        uint256 idx = uint256(key);
        return (idx > 0) || (idx >= techs.length);
    }
}