import React, { useState } from 'react';
import { TeamSetup } from './components/TeamSetup';
import { Contest } from './components/Contest';
import { Team } from './types';

function App() {
  const [gamePhase, setGamePhase] = useState<'setup' | 'contest'>('setup');
  const [teams, setTeams] = useState<{ A: Team; B: Team } | null>(null);

  const handleStartGame = (teamA: Team, teamB: Team) => {
    setTeams({ A: teamA, B: teamB });
    setGamePhase('contest');
  };

  const handleBackToSetup = () => {
    setGamePhase('setup');
    setTeams(null);
  };

  return (
    <div className="App">
      {gamePhase === 'setup' ? (
        <TeamSetup onStartGame={handleStartGame} />
      ) : (
        teams && (
          <Contest
            teamA={teams.A}
            teamB={teams.B}
            onBackToSetup={handleBackToSetup}
          />
        )
      )}
    </div>
  );
}

export default App;