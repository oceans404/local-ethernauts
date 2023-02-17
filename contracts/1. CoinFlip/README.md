# Coinflip

- Pass this challenge by correctly guessing the outcome of the coinflip 10 times in a row

```
npx hardhat node
npx hardhat test "contracts/1. CoinFlip/CoinFlip.test.ts"
```

## Steph's Contracts

- CoinFlip (OG): https://goerli.etherscan.io/address/0x086F2DfCCc1826dA39c8F7c03E78A55De6AF1c8c#readContract -- watch consecutiveWin count increment each time you attack with the AttackingCoinFlip contract
- AttackingCoinFlip: https://goerli.etherscan.io/address/0xEAEc02caf61d15f6Ba00Bff1FabBBB2615D68141#writeContract -- run hackContract to attack the OG contract

## Steph's Notes

- There's no true randomness on chain, only SOME psuedo-randomness that is considered "good enough."
- The reason we can exploit CoinFlip is that the variables used (blockhash) to generate the psuedo-random flip value are publicly available on chain.
- "In the Block-hash approach, the hash of blocks or transactions is used as the source of randomness. As the hash is deterministic, everyone will get the same result. A block, once added to the blockchain, is likely to stay there forever, therefore, everyone can verify the correctness of the generated numbers." - [A Review Of Random Number Generators (RNG) On Blockchain](https://medium.com/ginar-io/a-review-of-random-number-generator-rng-on-blockchain-fe342d76261b)
- We can use the CoinFlipHelper contract to check the coin flip value, then call the real CoinFlip contract's flip(_guess) with the value we already know from the helper contract.

## Commands

Deploy contract(s)

```
npx hardhat run "contracts/1. CoinFlip/deploy.js" --network goerli
```

Verify CoinFlip contract
```
npx hardhat verify --network goerli 0x086F2DfCCc1826dA39c8F7c03E78A55De6AF1c8c 
```

Verify Attacker contract with CoinFlip contract address param
```
npx hardhat verify --network goerli 0xEAEc02caf61d15f6Ba00Bff1FabBBB2615D68141 "0x086F2DfCCc1826dA39c8F7c03E78A55De6AF1c8c"
```


# Hints

- CoinFlip's flip function is _intended_ to randomly make the side variable either true or false
- Can you create similar logic in your attacking contract to correctly choose what the flip function will choose?
- You may add code on `AttackingCoinFlip`.sol and/or `CoinFlipHelper.ts` to help pass the tests in CoinFlip.test.ts