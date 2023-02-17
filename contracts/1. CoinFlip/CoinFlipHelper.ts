import { ethers } from "hardhat";

const helper = async (victim: any, attacker: any) => {
  const [addr] = await ethers.getSigners();

  const attackCount = 10;
  for (let i = 0; i < attackCount; i++) {
    await attacker.connect(addr).hackContract();
  }
};

export default helper;
