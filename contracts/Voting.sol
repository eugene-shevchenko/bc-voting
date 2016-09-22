import "Container.sol";

contract Voting {
    
    enum Status {
        PENDING,
        STARTED,
        FINISHED
    }
    
    string public name;
    Status status = Status.PENDING;
    
    Container public proposals;
    Container public voters;
    
    mapping(uint => uint) public result;
    mapping(address => bool) public voted;
    uint public votersCount;
    
    function Voting(string _name, address _proposals, address _voters) {
        name = _name;
        proposals = Container(_proposals);
        voters = Container(_voters);
    }
    
    function assertStatus(Status _status) internal {
        if (status != _status) throw;
    }
    
    function vote(uint proposalId) {
        assertStatus(Status.STARTED);

        if (voted[msg.sender] || !(voters.contains(bytes32(msg.sender)) && proposals.contains(bytes32(proposalId)))) {
            throw;
        }        
        
        result[proposalId]++;
        voted[msg.sender] = true;
        votersCount++;
    }
    
    function start() {
        assertStatus(Status.PENDING);
        status = Status.STARTED;
    }
    
    function finish() {
        assertStatus(Status.STARTED);
        status = Status.FINISHED;
    }
}