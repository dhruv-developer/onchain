import { useState } from "react";
import { ethers } from "ethers";
import contractABI from './CooperativeSavingsABI.json';

function App() {
  const [account, setAccount] = useState(null);
  const [savings, setSavings] = useState(0);
  const contractAddress = "YOUR_CONTRACT_ADDRESS";

  // Request account access
  const requestAccount = async () => {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
    } catch (error) {
      console.error("User denied account access", error);
    }
  };

  // Interact with the contract
  const getContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  };

  // Deposit function
  const depositFunds = async () => {
    if (!account) return;
    const contract = getContract();
    const amount = ethers.utils.parseEther("1"); // Deposit 1 ETH
    await contract.deposit({ value: amount });
  };

  // Request a loan
  const requestLoan = async () => {
    if (!account) return;
    const contract = getContract();
    const loanAmount = ethers.utils.parseEther("0.5"); // Request 0.5 ETH loan
    await contract.requestLoan(loanAmount);
  };

  // Get savings of the user
  const fetchSavings = async () => {
    if (!account) return;
    const contract = getContract();
    const userSavings = await contract.getSavings(account);
    setSavings(ethers.utils.formatEther(userSavings));
  };

  return (
    <div className="App">
      <header className="App-header">
        {!account ? (
          <button onClick={requestAccount}>Connect MetaMask</button>
        ) : (
          <>
            <p>Connected: {account}</p>
            <button onClick={depositFunds}>Deposit 1 ETH</button>
            <button onClick={requestLoan}>Request 0.5 ETH Loan</button>
            <button onClick={fetchSavings}>Fetch Savings</button>
            <p>Your Savings: {savings} ETH</p>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
