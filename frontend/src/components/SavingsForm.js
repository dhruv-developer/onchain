import React, { useState } from 'react';
import Web3 from 'web3';
import CooperativeSavingsContract from '../contracts/CooperativeSavings.json'; // Import the contract ABI

const SavingsForm = () => {
  const [amount, setAmount] = useState('');
  const [transactionHash, setTransactionHash] = useState('');

  const handleDeposit = async (e) => {
    e.preventDefault();
    if (!amount) return alert('Please enter an amount');

    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const networkId = await web3.eth.net.getId();
    const contractAddress = CooperativeSavingsContract.networks[networkId].address;
    const contract = new web3.eth.Contract(CooperativeSavingsContract.abi, contractAddress);

    const accounts = await web3.eth.getAccounts();

    try {
      const result = await contract.methods.deposit().send({
        from: accounts[0],
        value: web3.utils.toWei(amount, 'ether')
      });
      setTransactionHash(result.transactionHash);
      alert('Deposit successful');
    } catch (error) {
      console.error('Error depositing:', error);
      alert('Deposit failed');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Deposit Savings</h2>
      <form onSubmit={handleDeposit}>
        <input
          type="number"
          placeholder="Amount in ETH"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <button type="submit" className="bg-base-primary text-white py-2 px-4 rounded">Deposit</button>
      </form>
      {transactionHash && <p className="mt-4 text-green-500">Transaction Hash: {transactionHash}</p>}
    </div>
  );
};

export default SavingsForm;
