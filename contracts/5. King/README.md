# Vault

- The King contract represents a simple ponzi scheme type game: whoever sends it an amount of ether that is larger than the current prize becomes the new king.
- On such an event, the overthrown king gets paid the new prize, making a bit of ether in the process.
- The test will attempt to pass a large amount of ETH to reclaim kingship.
- Pass the challenge by not allowing anyone else to claim kingship

```
npx hardhat node
npx hardhat test "contracts/5. King/King.test.ts"
```

## Steph's notes

- this was a real exploit -- https://www.kingoftheether.com/postmortem.html 
- win the game (stay king) by making it impossible for someone to transfer money to the current king (me)
- this works because if you send eth to another contract, it MUST have a fallback or receive function so it can successfully process the tx you are sending. otherwise your tx will fail.
- you can't assume txs to external contracts will be successful.

# Hints

- Understanding how the transfer works in solidity and how revert works will help you complete this challenge
- Understanding how fallback functions work in solidity will also help you complete this challenge
- Understanding revert, assert, and require will also help you complete this challenge

