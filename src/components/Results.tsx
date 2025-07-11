import React from 'react';
import { Trophy, Medal, Users, Target, RotateCcw } from 'lucide-react';
import { Team } from '../types';

interface ResultsProps {
  teamA: Team;
  teamB: Team;
  onPlayAgain: () => void;
}

export const Results: React.FC<ResultsProps> = ({ teamA, teamB, onPlayAgain }) => {
  const isDraw = teamA.score === teamB.score;
  const winner = !isDraw ? (teamA.score > teamB.score ? teamA : teamB) : null;
  const runnerUp = !isDraw ? (winner === teamA ? teamB : teamA) : null;

  const getAccuracy = (team: Team) => {
    return team.totalAnswers > 0
      ? ((team.correctAnswers / team.totalAnswers) * 100).toFixed(1)
      : '0.0';
  };

  const TeamCard: React.FC<{ team: Team; position: 'winner' | 'runner-up' | 'tie' }> = ({
    team,
    position
  }) => {
    const getCardStyle = () => {
      switch (position) {
        case 'winner':
          return 'bg-gradient-to-br from-yellow-100 to-yellow-200 border-yellow-400 transform scale-105';
        case 'runner-up':
          return 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-400';
        case 'tie':
          return 'bg-gradient-to-br from-blue-100 to-blue-200 border-blue-400';
        default:
          return 'bg-white border-gray-300';
      }
    };

    const getIcon = () => {
      switch (position) {
        case 'winner':
          return <Trophy className="w-8 h-8 text-yellow-500" />;
        case 'runner-up':
          return <Medal className="w-8 h-8 text-gray-500" />;
        case 'tie':
          return <Medal className="w-8 h-8 text-blue-500" />;
        default:
          return <Users className="w-8 h-8 text-gray-500" />;
      }
    };

    return (
      <div className={`rounded-xl shadow-lg p-6 border-2 transition-all duration-300 ${getCardStyle()}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {getIcon()}
            <h3 className="text-2xl font-bold text-gray-800 ml-3">{team.name}</h3>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-gray-800">{team.score}</div>
            <div className="text-sm text-gray-600">points</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white bg-opacity-50 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-gray-800">{team.correctAnswers}</div>
            <div className="text-sm text-gray-600">Correct</div>
          </div>
          <div className="bg-white bg-opacity-50 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-gray-800">{getAccuracy(team)}%</div>
            <div className="text-sm text-gray-600">Accuracy</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2">Team Members:</div>
          <div className="flex flex-wrap gap-2">
            {team.members.map((member, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-white bg-opacity-70 rounded-full text-sm text-gray-700"
              >
                {member}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Contest Results</h1>
          {isDraw ? (
            <p className="text-xl text-gray-600">It's a tie! Both teams performed excellently!</p>
          ) : (
            <p className="text-xl text-gray-600">
              Congratulations to <span className="font-bold text-yellow-600">{winner?.name}</span>!
            </p>
          )}
        </div>

        {/* Winner / Draw Announcement */}
        {isDraw ? (
          <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl shadow-lg p-6 mb-8 text-center">
            <Medal className="w-16 h-16 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">🤝 It's a Draw! 🤝</h2>
            <p className="text-blue-100 text-lg">
              Both teams scored {teamA.score} points. Excellent performance!
            </p>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl shadow-lg p-6 mb-8 text-center">
            <Trophy className="w-16 h-16 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">🎉 {winner?.name} Wins! 🎉</h2>
            <p className="text-yellow-100 text-lg">
              With {winner?.score} points and {getAccuracy(winner!)}% accuracy
            </p>
          </div>
        )}

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {!isDraw ? (
            <>
              <TeamCard team={winner!} position="winner" />
              <TeamCard team={runnerUp!} position="runner-up" />
            </>
          ) : (
            <>
              <TeamCard team={teamA} position="tie" />
              <TeamCard team={teamB} position="tie" />
            </>
          )}
        </div>

        {/* Overall Statistics */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <Target className="w-6 h-6 mr-2" />
            Contest Statistics
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {Math.max(teamA.totalAnswers, teamB.totalAnswers)}
              </div>
              <div className="text-gray-600">Questions per Team</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {teamA.correctAnswers + teamB.correctAnswers}
              </div>
              <div className="text-gray-600">Total Correct Answers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                {(
                  ((teamA.correctAnswers + teamB.correctAnswers) /
                    (teamA.totalAnswers + teamB.totalAnswers)) *
                  100
                ).toFixed(1)}
                %
              </div>
              <div className="text-gray-600">Overall Accuracy</div>
            </div>
          </div>
        </div>

        {/* Performance Summary (optional) */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <Users className="w-6 h-6 mr-2" />
            Team Performance Summary
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[teamA, teamB].map((team, idx) => (
              <div key={idx} className="border rounded-lg p-4">
                <h4 className="text-xl font-semibold text-gray-700 mb-2">{team.name}</h4>
                <p className="text-gray-600">Score: <strong>{team.score}</strong></p>
                <p className="text-gray-600">Correct Answers: <strong>{team.correctAnswers}</strong></p>
                <p className="text-gray-600">Total Answers: <strong>{team.totalAnswers}</strong></p>
                <p className="text-gray-600">Accuracy: <strong>{getAccuracy(team)}%</strong></p>
              </div>
            ))}
          </div>
        </div>

        {/* Play Again Button */}
        <div className="text-center">
          <button
            onClick={onPlayAgain}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};
