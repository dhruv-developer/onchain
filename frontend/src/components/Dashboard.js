import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold text-base-primary">Welcome to Cooperative Savings</h1>
      <p className="mt-4 text-lg text-gray-600">Join our community and save together.</p>
      <div className="mt-6 flex space-x-4">
        <Link to="/savings" className="bg-base-primary text-white py-2 px-4 rounded">Deposit Savings</Link>
        <Link to="/loan-request" className="bg-base-primary text-white py-2 px-4 rounded">Request Loan</Link>
        <Link to="/voting" className="bg-base-primary text-white py-2 px-4 rounded">Vote on Proposals</Link>
      </div>
    </div>
  );
};

export default Dashboard;
