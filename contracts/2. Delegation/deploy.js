const hre = require("hardhat");

const owner = "0x68241aAb804A0A4E23f91BCfcdeB18C2c62AcddF";
let delegateAddress = "0xc5e66706206456De3ce1437640873679AE4bD445";
let delegationAddress = "0xd25C29327355F0168659e0134ae79c3809D78b42";

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  if (!delegateAddress && !delegationAddress) {
    const Delegate = await hre.ethers.getContractFactory("Delegate");
    const delegateContract = await Delegate.deploy(owner);

    await delegateContract.deployed();
    console.log("Delegate deployed to:", delegateContract.address);
    delegateAddress = delegateContract.address;

    const Delegation = await hre.ethers.getContractFactory("Delegation");
    const delegationContract = await Delegation.deploy(delegateAddress);

    await delegationContract.deployed();
    console.log("Delegation deployed to:", delegationContract.address);
    delegationAddress = delegationContract.address;
  }

  const AttackingDelegation = await hre.ethers.getContractFactory(
    "AttackingDelegation"
  );
  const attackingDelegation = await AttackingDelegation.deploy(
    delegationAddress
  );

  await attackingDelegation.deployed();
  console.log("AttackingDelegation deployed to:", attackingDelegation.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
