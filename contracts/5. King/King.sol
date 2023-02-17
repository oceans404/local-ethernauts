// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "hardhat/console.sol";

contract King {
    address payable public king;
    uint256 public prize;
    address payable public owner;

    constructor() payable {
        owner = payable(msg.sender);
        king = payable(msg.sender);
        prize = msg.value;
    }

    receive() external payable {
        // if the new sent amount is bigger than the current king's value, send the current king the value and set the msg.sender as the new king
        require(msg.value >= prize || msg.sender == owner);
        king.transfer(msg.value);
        king = payable(msg.sender);
        prize = msg.value;
    }

    function _king() public view returns (address payable) {
        return king;
    }

    function _prize() public view returns (uint256) {
        return prize;
    }
}
