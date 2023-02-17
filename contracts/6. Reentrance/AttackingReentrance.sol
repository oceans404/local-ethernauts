// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./Reentrance.sol";

interface ReentranceInterface {
    function donate(address _to) external payable;
    // function balanceOf(address _who) public view returns (uint256 balance);
    function withdraw(uint _amount) external;
}

contract AttackingReentrance {
    address payable public contractAddress;

    constructor(address payable _contractAddress) payable {
        contractAddress = _contractAddress;
    }

    function hackContract() external {
        // Code me!
        ReentranceInterface victimContract = ReentranceInterface(contractAddress);
    }
}
