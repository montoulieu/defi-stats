import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';

const { exec } = require('child_process');

function execute(command, callback) {
  exec(command, (error, stdout, stderr) => {
    callback(stdout);
  });
}

// call the function
execute('ping -c 4 0.0.0.0', (output) => {
  console.log(output);
});

const Hello = () => {
  return (
    <div className="grid h-full grid-cols-2 grid-rows-2 gap-4 p-4">
      <div className="bg-green-300 stat-card">Chia Farm Summary</div>
      <div className="bg-gray-400 stat-card">Flexpool Stats</div>
      <div className="bg-gray-400 stat-card">Favorite Coin Prices</div>
      <div className="bg-gray-400 stat-card">Nvidia Snatcher</div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
