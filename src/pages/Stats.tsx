import React from 'react';
import ChiaSummary from '../components/chia/ChiaSummary';

function Stats() {
  return (
    <div className="grid h-full grid-cols-2 grid-rows-2 gap-4 p-4">
      <ChiaSummary />
      <div className="bg-blue-400 stat-card">Flexpool Stats</div>
      <div className="bg-gray-400 stat-card">Favorite Coin Prices</div>
      <div className="bg-lime-400 stat-card">GPU Stock Tracker</div>
    </div>
  );
}

export default Stats;
