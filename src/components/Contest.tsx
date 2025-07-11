import React, { useState, useEffect } from 'react';
import { Question } from './Question';
import { Results } from './Results';
import { Team, GameState } from '../types';
import { javaQuestions } from '../data/questions';

interface ContestProps {
  teamA: Team;
  teamB: Team;
  onBackToSetup: () => void;
}

export const Contest: React.FC<ContestProps> = ({ teamA, teamB, onBackToSetup }) => {
  const [gameState, setGameState] = useState<GameState>({
    currentQuestionIndex: 0,
    currentTeam: 'A',
    teams: { A: teamA, B: teamB },
    gameStatus: 'playing',
    timeLeft: 30,
    questionsAnswered: 0
  });

  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const totalQuestions = javaQuestions.length;

  useEffect(() => {
    if (gameState.gameStatus === 'playing') {
      const newTimer = setInterval(() => {
        setGameState(prev => {
          if (prev.timeLeft <= 1) {
            return { ...prev, timeLeft: 0 };
          }
          return { ...prev, timeLeft: prev.timeLeft - 1 };
        });
      }, 1000);
      setTimer(newTimer);

      return () => {
        if (newTimer) clearInterval(newTimer);
      };
    }
  }, [gameState.gameStatus, gameState.currentQuestionIndex]);

  const handleAnswer = (selectedAnswer: number) => {
    if (timer) clearInterval(timer);
    
    const currentQuestion = javaQuestions[gameState.currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const currentTeamId = gameState.currentTeam;
    
    setGameState(prev => {
      const updatedTeams = { ...prev.teams };
      const team = updatedTeams[currentTeamId];
      
      updatedTeams[currentTeamId] = {
        ...team,
        score: team.score + (isCorrect ? 1 : 0),
        correctAnswers: team.correctAnswers + (isCorrect ? 1 : 0),
        totalAnswers: team.totalAnswers + 1
      };

      const newQuestionsAnswered = prev.questionsAnswered + 1;
      const shouldEndGame = newQuestionsAnswered >= totalQuestions;
      
      return {
        ...prev,
        teams: updatedTeams,
        questionsAnswered: newQuestionsAnswered,
        gameStatus: shouldEndGame ? 'finished' : 'playing',
        currentQuestionIndex: shouldEndGame ? prev.currentQuestionIndex : prev.currentQuestionIndex + 1,
        currentTeam: shouldEndGame ? prev.currentTeam : (prev.currentTeam === 'A' ? 'B' : 'A'),
        timeLeft: shouldEndGame ? 0 : 30
      };
    });
  };

  const handleTimeUp = () => {
    handleAnswer(-1); // -1 indicates no answer selected (time up)
  };

  const handlePlayAgain = () => {
    onBackToSetup();
  };

  if (gameState.gameStatus === 'finished') {
    return (
      <Results
        teamA={gameState.teams.A}
        teamB={gameState.teams.B}
        onPlayAgain={handlePlayAgain}
      />
    );
  }

  const currentQuestion = javaQuestions[gameState.currentQuestionIndex];
  const currentTeam = gameState.teams[gameState.currentTeam];

  return (
    <Question
      question={currentQuestion}
      questionNumber={gameState.currentQuestionIndex + 1}
      totalQuestions={totalQuestions}
      currentTeam={gameState.currentTeam}
      teamName={currentTeam.name}
      onAnswer={handleAnswer}
      timeLeft={gameState.timeLeft}
      onTimeUp={handleTimeUp}
    />
  );
};