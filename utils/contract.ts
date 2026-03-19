import { ethers } from 'ethers';

// Provider Setup
export const getProvider = (rpcUrl) => {
    return new ethers.providers.JsonRpcProvider(rpcUrl);
};

// Wallet Connection
export const connectWallet = async () => {
    if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        return { provider, signer };
    } else {
        throw new Error('Please install MetaMask!');
    }
};

// Smart Contract Integration
export const getContract = (contractAddress, abi, signer) => {
    return new ethers.Contract(contractAddress, abi, signer);
};
