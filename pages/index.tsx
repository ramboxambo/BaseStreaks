import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const ContractAddress = '0x6Ac2752De7eD1E8C62A08FC6f722be34a242Df1D';
const ABI = [
  // Define the contract ABI here
  // Example:
  // 'function yourFunctionName(params) public view returns (type)',
];

const WalletConnector: React.FC = () => {
  const [provider, setProvider] = useState<any>(null);
  const [signer, setSigner] = useState<any>(null);
  const [contract, setContract] = useState<any>(null);
  const [contractData, setContractData] = useState(null);

  useEffect(() => {
    const init = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);

      const signer = provider.getSigner();
      setSigner(signer);

      const contract = new ethers.Contract(ContractAddress, ABI, signer);
      setContract(contract);
    };

    init();
  }, []);

  const connectWallet = async () => {
    await provider.send('eth_requestAccounts', []);
    console.log('Wallet connected');
  };

  const fetchContractData = async () => {
    // Replace with actual contract function call
    const data = await contract.someFunction();
    setContractData(data);
  };

  const interactWithContract = async () => {
    // Replace with actual contract interaction
    const tx = await contract.someFunctionToInteract();
    await tx.wait();
    console.log('Transaction successful');
  };

  return (
    <div>
      <h1>Wallet Connector</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
      <button onClick={fetchContractData}>Fetch Contract Data</button>
      <button onClick={interactWithContract}>Interact with Contract</button>
      {contractData && <div>Contract Data: {JSON.stringify(contractData)}</div>}
    </div>
  );
};

export default WalletConnector;