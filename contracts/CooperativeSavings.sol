// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CooperativeSavings {
    struct Member {
        uint balance;
        bool active;
    }

    mapping(address => Member) public members;

    function join() public {
        require(!members[msg.sender].active, "Already a member");
        members[msg.sender].active = true;
    }

    function deposit() public payable {
        require(members[msg.sender].active, "Not a member");
        members[msg.sender].balance += msg.value;
    }

    function withdraw(uint _amount) public {
        require(members[msg.sender].active, "Not a member");
        require(members[msg.sender].balance >= _amount, "Insufficient balance");
        payable(msg.sender).transfer(_amount);
        members[msg.sender].balance -= _amount;
    }
}
