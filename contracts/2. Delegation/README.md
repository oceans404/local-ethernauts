# Delegation

- Pass this challenge by claiming ownership of the deployed Delegation contract

```
npx hardhat node
npx hardhat test "contracts/2. Delegation/Delegation.test.ts"
```


## Steph's Contracts

- Delegate deployed to: [0xc5e66706206456De3ce1437640873679AE4bD445](https://goerli.etherscan.io/address/0xc5e66706206456De3ce1437640873679AE4bD445)
- Delegation deployed to: [0xd25C29327355F0168659e0134ae79c3809D78b42](https://goerli.etherscan.io/address/0xd25C29327355F0168659e0134ae79c3809D78b42)
- AttackingDelegation deployed to [0x7342504dc84ED13Fe46f71473432a1a3e20B7325](https://goerli.etherscan.io/address/0x7342504dc84ED13Fe46f71473432a1a3e20B7325#code)

## Steph's Notes

- delegatecall docs: https://docs.soliditylang.org/en/latest/introduction-to-smart-contracts.html#delegatecall-and-libraries
- tl;dr delegatecall is like message, but it lets a contract forward its context/state to another contract (while preserving msg.sender and msg.value)
- delegatecall is useful because it lets you extract logic out into a library, BUT delegatecall is a catch-all forwarding mechanism and can lead to attacks like the Parity wallet hack -- https://blog.openzeppelin.com/on-the-parity-wallet-multisig-hack-405a8c12e8f7/

# Hints

- Understanding delegatecall will help you complete this challenge

## Commands

Deploy contract(s)

```
npx hardhat run "contracts/2. Delegation/deploy.js" --network goerli
```

Verify Delegate contract with owner address param
```
npx hardhat verify --network goerli 0xc5e66706206456De3ce1437640873679AE4bD445 "0x68241aAb804A0A4E23f91BCfcdeB18C2c62AcddF"
```

Verify Delegation contract with Delegate contract address param
```
npx hardhat verify --network goerli 0xd25C29327355F0168659e0134ae79c3809D78b42 "0xc5e66706206456De3ce1437640873679AE4bD445"
```

Verify AttackingDelegation contract with Delegation contract address param
```
npx hardhat verify --network goerli 0x7342504dc84ED13Fe46f71473432a1a3e20B7325 "0xd25C29327355F0168659e0134ae79c3809D78b42"
```




## Hacking it

- pwn() the Delegate contract to become the owner
- 