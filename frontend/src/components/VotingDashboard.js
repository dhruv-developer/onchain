import React from 'react';

const VotingDashboard = () => {
  // Placeholder data for proposals (you can fetch from a smart contract)
  const proposals = [
    { id: 1, description: "Increase savings interest rate" },
    { id: 2, description: "Implement new loan policy" },
  ];

  const handleVote = (id) => {
    alert(`You voted for proposal ID: ${id}`);
    // Implement further voting logic here
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Voting Dashboard</h2>
      <div>
        {proposals.map((proposal) => (
          <div key={proposal.id} className="border-b py-2">
            <p>{proposal.description}</p>
            <button 
              onClick={() => handleVote(proposal.id)} 
              className="bg-base-primary text-white py-1 px-3 rounded mt-2"
            >
              Vote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotingDashboard;
