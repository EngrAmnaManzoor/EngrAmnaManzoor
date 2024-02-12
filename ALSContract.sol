pragma solidity ^0.8.0;

contract ALSContract {
    address public owner;
    mapping(address => uint256) public donations;

    constructor() {
        owner = msg.sender;
    }

    function donate() public payable {
        require(msg.value > 0, "Invalid donation amount");
        donations[msg.sender] += msg.value;
    }

    function getDonation(address donor) public view returns (uint256) {
        return donations[donor];
    }
}
