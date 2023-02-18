# Reentrance

- Pass the challenge by taking all the ETH out of the Reentrance contract

```
npx hardhat node
npx hardhat test "contracts/6. Reentrance/Reentrance.test.ts"
```

## Steph's notes

- tl;dr a reentrancy attack is a recursive call that calls back into a function before the function can complete its entire execution.
- if the function call to transfer money is conducted before the logic to decrement the funds available to withdraw happens, you could face a reentrancy attack 
- Attacks -- Reentrancy https://consensys.github.io/smart-contract-best-practices/attacks/reentrancy/
- The DAO hack https://www.coindesk.com/understanding-dao-hack-journalists used recursion to withdraw all funds from the contract


# Hints

- Understanding how the reentrancy solidity vulnerability works will help you complete this challenge
