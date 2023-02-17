# Vault

- Pass this challenge by unlocking the vault, on this challenge you'll need to code on `VaultHelper.ts` to get the private data!

```
npx hardhat node
npx hardhat test "contracts/4. Vault/Vault.test.ts"
```

## Steph's notes

- all storage is public even if the variable is private
- How do you see a private variable -- [Stack overflow](https://ethereum.stackexchange.com/questions/44893/how-do-i-see-the-value-of-a-string-stored-in-a-private-variable) you can look at storage by position using getStorageAt https://docs.alchemy.com/reference/eth-getstorageat
- on bytes32 zero padding issue https://github.com/ethers-io/ethers.js/issues/66

# Hints

- First, understand how ETH stores all state, even state declared as private
- Second, find a way to access the private variable "password" using the ethers.js library
- Finally, use the password to unlock the vault!
