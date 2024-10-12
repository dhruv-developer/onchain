import React, { useState } from 'react';

const LoanRequestForm = () => {
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');

  const handleRequestLoan = (e) => {
    e.preventDefault();
    alert(`Loan request for ${amount} ETH submitted for: ${reason}`);
    // Implement further loan request logic here
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Request a Loan</h2>
      <form onSubmit={handleRequestLoan}>
        <input
          type="number"
          placeholder="Amount in ETH"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <input
          type="text"
          placeholder="Reason for Loan"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <button type="submit" className="bg-base-primary text-white py-2 px-4 rounded">Request Loan</button>
      </form>
    </div>
  );
};

export default LoanRequestForm;
