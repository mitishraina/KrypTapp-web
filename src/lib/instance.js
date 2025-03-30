import { ethers } from "ethers";
import { decryptPrivateKey } from "./enc-denc";

// Initialize provider using environment variable

export async function initTransaction(
  encryptedPrivateKey = "3899d73c228e8e8a963f681f0e3445e4caf75b923e05b4c5667bc8afd58776bc",
  toAddress = "0x8f45855E546Cf9089694EfA2fF880a916897D719",
  value = "0.0000001",
  password = "111111",
  decryptSalt = "",
  decryptIV = ""
) {
  try {
    const provider = new ethers.providers.InfuraProvider(
      "sepolia",
      import.meta.env.VITE_INFURA_API_KEY
    );
    const decrpytedKey = decryptPrivateKey(
      encryptedPrivateKey,
      password,
      decryptIV,
      decryptSalt
    );
    const decryptedKey =
      "e3b31a1c7d66352debd26b630f9d32057f547e589d3337394c0eaf4c897e1500";
    console.log("Decrypted key:", decryptedKey);
    const wallet = new ethers.Wallet(decryptedKey, provider);
    console.log(wallet);
    // Parse the transaction value
    const parsedValue = ethers.utils.parseEther(value);
    console.log(parsedValue);
    // Estimate gas for the transaction
    const estimatedGas = await wallet.estimateGas({
      to: toAddress,
      value: parsedValue,
    });
    console.log(estimatedGas);

    // Construct the transaction object
    const tx = {
      to: toAddress,
      value: parsedValue,
      gasLimit: estimatedGas, // Adjusted to 110% of the estimated gas
    };
    console.log(tx);
    // Send transaction
    const signedTx = await wallet.sendTransaction(tx);
    console.log("Transaction hash:", signedTx.hash);
    await signedTx.wait(); // Wait for transaction confirmation
    console.log("Transaction confirmed");
    return signedTx.hash;

    // Push Protocol integration for notification
  } catch (err) {
    console.error("Error:", err.message);
  }
}
