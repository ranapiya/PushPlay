import { ethers } from "hardhat";

async function main() {
  const MemoryArenaFactory = await ethers.getContractFactory("MemoryArena");
  const deploymentTx = await MemoryArenaFactory.deploy();

  const receipt = await deploymentTx.waitForDeployment(); // Ethers v6 style
  const deployedAddress = await receipt.getAddress();     // Get deployed address

  console.log(`MemoryArena deployed to: ${deployedAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
