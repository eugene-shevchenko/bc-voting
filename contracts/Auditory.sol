import "Container.sol";

contract Auditory is Container {
    
    struct Listener {
        string name;
        string company;
    }
    
    Listener[] listeners;
    mapping(address => uint) index;
    
    function Auditory() {

        add("Eugene", "ether.camp");
        add("Anton", "ether.camp");
        add("Roman", "ether.camp");
        add("Alex", "ether.camp");

    }
    
    function add(string name, string company) {
        index[msg.sender] = listeners.push(Listener(name, company));
    }
    
    function getByAddress(address addr) constant returns (string name, string company) {
        if (!exists(addr)) throw;
        
        return getByIndex(index[addr] - 1);
    }

    function getByIndex(uint ind) constant returns (string name, string company) {
        if (ind >= listeners.length) throw;
        
        Listener listener = listeners[ind];
        name = listener.name;
        company = listener.company;
    }
    
    function exists(address addr) constant returns (bool) {
        return index[addr] > 0;
    }

    function size() constant returns (uint) {
        return listeners.length;    
    }
    
    function contains(bytes32 key) constant returns (bool) {
        return exists(address(key));
    }
}