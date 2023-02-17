const hre = require("hardhat");

// https://goerli.etherscan.io/address/0x086F2DfCCc1826dA39c8F7c03E78A55De6AF1c8c
let coinFlipContractAddress = "0x086F2DfCCc1826dA39c8F7c03E78A55De6AF1c8c";

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  if (!coinFlipContractAddress) {
    const CoinFlip = await hre.ethers.getContractFactory("CoinFlip");
    const coinFlip = await CoinFlip.deploy();

    await coinFlip.deployed();
    console.log("CoinFlip deployed to:", coinFlip.address);
    coinFlipContractAddress = coinFlip.address;
  }

  const AttackingCoinFlip = await hre.ethers.getContractFactory(
    "AttackingCoinFlip"
  );
  const attackingCoinFlip = await AttackingCoinFlip.deploy(
    coinFlipContractAddress
  );

  await attackingCoinFlip.deployed();
  console.log("AttackingCoinFlip deployed to:", attackingCoinFlip.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
