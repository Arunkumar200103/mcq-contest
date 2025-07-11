import React, { useState } from 'react';
import { Users, Plus, Trash2, Play } from 'lucide-react';
import { Team } from '../types';

interface TeamSetupProps {
  onStartGame: (teamA: Team, teamB: Team) => void;
}

export const TeamSetup: React.FC<TeamSetupProps> = ({ onStartGame }) => {
  const [teamA, setTeamA] = useState<Team>({
    id: 'A',
    name: 'Team Alpha',
    members: [''],
    score: 0,
    correctAnswers: 0,
    totalAnswers: 0
  });

  const [teamB, setTeamB] = useState<Team>({
    id: 'B',
    name: 'Team Beta',
    members: [''],
    score: 0,
    correctAnswers: 0,
    totalAnswers: 0
  });

  const updateTeamName = (teamId: string, name: string) => {
    if (teamId === 'A') {
      setTeamA({ ...teamA, name });
    } else {
      setTeamB({ ...teamB, name });
    }
  };

  const updateMember = (teamId: string, index: number, value: string) => {
    const team = teamId === 'A' ? teamA : teamB;
    const newMembers = [...team.members];
    newMembers[index] = value;
    
    if (teamId === 'A') {
      setTeamA({ ...teamA, members: newMembers });
    } else {
      setTeamB({ ...teamB, members: newMembers });
    }
  };

  const addMember = (teamId: string) => {
    const team = teamId === 'A' ? teamA : teamB;
    if (team.members.length < 5) {
      const newMembers = [...team.members, ''];
      if (teamId === 'A') {
        setTeamA({ ...teamA, members: newMembers });
      } else {
        setTeamB({ ...teamB, members: newMembers });
      }
    }
  };

  const removeMember = (teamId: string, index: number) => {
    const team = teamId === 'A' ? teamA : teamB;
    if (team.members.length > 1) {
      const newMembers = team.members.filter((_, i) => i !== index);
      if (teamId === 'A') {
        setTeamA({ ...teamA, members: newMembers });
      } else {
        setTeamB({ ...teamB, members: newMembers });
      }
    }
  };

  const canStartGame = () => {
    return teamA.name.trim() && teamB.name.trim() && 
           teamA.members.some(m => m.trim()) && 
           teamB.members.some(m => m.trim());
  };

  const handleStartGame = () => {
    if (canStartGame()) {
      const filteredTeamA = {
        ...teamA,
        members: teamA.members.filter(m => m.trim())
      };
      const filteredTeamB = {
        ...teamB,
        members: teamB.members.filter(m => m.trim())
      };
      onStartGame(filteredTeamA, filteredTeamB);
    }
  };

  const TeamCard: React.FC<{ team: Team; teamId: string; color: string }> = ({ team, teamId, color }) => (
    <div className={`bg-white rounded-xl shadow-lg p-6 border-t-4 border-${color}-500 transform hover:scale-105 transition-transform duration-300`}>
      <div className="flex items-center mb-4">
        <Users className={`w-6 h-6 text-${color}-500 mr-2`} />
        <h3 className="text-xl font-bold text-gray-800">Team {teamId}</h3>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Team Name
        </label>
        <input
          type="text"
          value={team.name}
          onChange={(e) => updateTeamName(teamId, e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter team name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Team Members
        </label>
        {team.members.map((member, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={member}
              onChange={(e) => updateMember(teamId, index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={`Member ${index + 1}`}
            />
            {team.members.length > 1 && (
              <button
                onClick={() => removeMember(teamId, index)}
                className="ml-2 p-2 text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
        
        {team.members.length < 5 && (
          <button
            onClick={() => addMember(teamId)}
            className="flex items-center text-blue-500 hover:text-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Member
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Java MCQ Contest
          </h1>
          <p className="text-lg text-gray-600">
            Set up your teams and get ready for the ultimate Java programming challenge!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <TeamCard team={teamA} teamId="A" color="blue" />
          <TeamCard team={teamB} teamId="B" color="red" />
        </div>

        <div className="text-center">
          <button
            onClick={handleStartGame}
            disabled={!canStartGame()}
            className={`inline-flex items-center px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
              canStartGame()
                ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            <Play className="w-5 h-5 mr-2" />
            Start Contest
          </button>
        </div>
      </div>
    </div>
  );
};