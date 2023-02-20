# Denial

- This is a simple wallet that drips funds over time. You can withdraw the funds slowly by becoming a withdrawing partner
- Pass the challenge by denying the owner from withdrawing funds when they call withdraw() (whilst the contract still has funds, and the transaction is of 1M gas or less)

```
npx hardhat test "contracts/7. Denial/Denial.test.ts"

```

## Steph's notes

- at first glance, this seems similar to challenge 5 (King) where we need to keep someone else from being able to "win" or control the contract
- transfer vs send vs call
    - transfer: called on a payable address, forwards hardcoded 2300 gas to contract (payable recieve function or payable fallback function designates the ability to have eth transfered to the account). throws an error if transfer doesn't succeed
    - send: forwards minimal gas (2300) to the address so it can emit an event. returns a truthy or falsy tx state.
    - call: ⭐️  recommended way to send money. low level function call to call any function in any contract with a value (amount of eth). if ("") unnamed is the second param, it triggers the receive/fallback function; returns (bool sent, bytes memory data) so you get the tx state and the data returned. with call you specify the amount of gas OR all gas you have remaining is forwarded to the address
- on line 26, the contrat doesn't specify a gas limit. SO we can exploit denial by wasting the contract's gas with expensive computations so it doesn't have enough to send to the owner so they can't withdraw funds
- we can also exploit with a reentrancy attack since there's no state update before the partner withdraws 

# Hints

- Understanding how the low level call function works in solidity will help complete this challenge
- Can you find a way to deplete the gas called with the withdrawal function?
