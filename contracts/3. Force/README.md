# Force

- Pass this challenge by giving the deployed Force contract some ETH

```
npx hardhat node
npx hardhat test "contracts/3. Force/Force.test.ts"
```

## Steph's notes

- "A malicious contract can use selfdestruct to force sending Ether to any contract." https://solidity-by-example.org/hacks/self-destruct/
- knowing this, don't rely on a contract's balance -- address(this).balance to gate business logic


# Hints

- Understanding selfdestruct will help you complete this challenge
