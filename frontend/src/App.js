
import React from 'react';
import PlayerPerformance from './components/PlayerPerformance';
import OutcomePrediction from './components/OutcomePrediction';
import TeamComposition from './components/TeamComposition';
import GameStrategy from './components/GameStrategy';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AI-Powered MLB Tool</h1>
      </header>
      <main>
        <PlayerPerformance />
        <OutcomePrediction />
        <TeamComposition />
        <GameStrategy />
      </main>
    </div>
  );
}

export default App;
