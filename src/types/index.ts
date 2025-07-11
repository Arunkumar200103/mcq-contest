export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Team {
  id: string;
  name: string;
  members: string[];
  score: number;
  correctAnswers: number;
  totalAnswers: number;
}

export interface GameState {
  currentQuestionIndex: number;
  currentTeam: 'A' | 'B';
  teams: {
    A: Team;
    B: Team;
  };
  gameStatus: 'setup' | 'playing' | 'finished';
  timeLeft: number;
  questionsAnswered: number;
}