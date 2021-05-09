import React from 'react';
import useChiaStore from '../../hooks/useChiaStore';
import useExecuteCommand from '../../hooks/useExecuteCommand';

function ChiaSummary() {
  // const chiaStore = useChiaStore();
  const chiaSummary = useChiaStore((state) => state.summary);
  const setChiaSummary = useChiaStore((state) => state.setSummary);

  const getChiaSummary = useExecuteCommand('chia farm summary', (output) => {
    const stats = output.split('\n');

    // const popped = stats.pop();
    // for (let stat of stats) {
    //   stat = stat.split(': ');
    // }

    console.log(stats);

    setChiaSummary(stats);
    return stats;
  });

  // console.log(getChiaSummary);

  return (
    <div className="bg-green-300 stat-card">
      {/* <img src="/assets/chia_logo.svg" /> */}
      <h1 className="text-lg font-extrabold">Chia Farm Summary</h1>
      {chiaSummary && (
        <ul className="font-light">
          {chiaSummary.map((stat) => (
            <li>{stat}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ChiaSummary;
