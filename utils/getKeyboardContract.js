import { ethers } from "ethers";

import abi from "../utils/Keyboards.json";

const contractAddress = "0x206fD5B2f2E3b553D7069fd952a95491611257a1";
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
