# local-ethernauts

This challenge is based on https://ethernaut.openzeppelin.com/

# Setup

1. Get all the dependencies installed with `yarn install`
2. Compile all contracts by running `npx hardhat compile`
3. Run a local node by running `npx hardhat node`

# Steph's setup

Create a .env file and copy .env.sample variables in.
- PRIVATE_KEY -- [export from Metamask](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key#:~:text=On%20the%20account%20page%2C%20click,click%20%E2%80%9CConfirm%E2%80%9D%20to%20proceed.)
- INFURA_ID -- [Create key](https://app.infura.io/)
- ETHERSCAN_KEY -- [Create key](https://etherscan.io/myapikey)

Check README instructions in each contracts/ challenge folder

# How to solve each level

- If you look inside the `contracts/` directory you'll find 8 levels for you to solve!
- Each level directory consists of the same structure, let's check out the first one to illustrate this:
  - **CoinFlip.sol**: This is the contract you're supposed to hack!
  - **AttackingCoinFlip.sol**: This is the malicious contract where you'll code the logic to exploit the vulnerable contract!
  - **CoinFlip.test.ts**: This is the file where you'll be able to test if the contract has been breached
  - **CoinFlipHelper.ts**: Not all challenges have this `Helper` file! Only the ones that require you to use `ethers` to interact with your contract do, which you can do right here! This function is already imported into the tests, so don't worry about anything other than coding!
  - And finally, the **README**. On this one you'll get all level instructions!
- After you're done writing your hack, run the following command to run the tests and see if you succesfully breached the contract:
  - `npx hardhat test contracts/{contract directory}/{contract name}.test.ts`
  - Example: `npx hardhat test "contracts/1. CoinFlip/CoinFlip.test.ts"`

# Helpful Tip

- You can console.log in solidity using hardhat! Read here for more details: https://hardhat.org/tutorial/debugging-with-hardhat-network.html
