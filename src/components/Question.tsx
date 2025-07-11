import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { Question as QuestionType } from '../types';

interface QuestionProps {
  question: QuestionType;
  questionNumber: number;
  totalQuestions: number;
  currentTeam: 'A' | 'B';
  teamName: string;
  onAnswer: (selectedAnswer: number) => void;
  timeLeft: number;
  onTimeUp: () => void;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  currentTeam,
  teamName,
  onAnswer,
  timeLeft,
  onTimeUp
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
    }
  }, [timeLeft, onTimeUp]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null || showResult) return;
    
    setSelectedAnswer(answerIndex);
    setIsCorrect(answerIndex === question.correctAnswer);
    setShowResult(true);
    
    setTimeout(() => {
      onAnswer(answerIndex);
      setSelectedAnswer(null);
      setShowResult(false);
    }, 2000);
  };

  const getTimeColor = () => {
    if (timeLeft > 10) return 'text-green-500';
    if (timeLeft > 5) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getTeamColor = () => {
    return currentTeam === 'A' ? 'from-blue-500 to-blue-600' : 'from-red-500 to-red-600';
  };

  const getDifficultyColor = () => {
    switch (question.difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className={`px-4 py-2 rounded-lg bg-gradient-to-r ${getTeamColor()} text-white font-semibold`}>
                {teamName}
              </div>
              <div className="ml-4">
                <span className="text-sm text-gray-500">Question {questionNumber} of {totalQuestions}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor()}`}>
                {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
              </div>
              <div className="flex items-center">
                <Clock className={`w-5 h-5 mr-2 ${getTimeColor()}`} />
                <span className={`text-xl font-bold ${getTimeColor()}`}>
                  {timeLeft}s
                </span>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="mb-6">
            <div className="text-sm text-gray-500 mb-2">Category: {question.category}</div>
            <h2 className="text-2xl font-bold text-gray-800 leading-relaxed">
              {question.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map((option, index) => {
              let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all duration-300 transform hover:scale-105 ";
              
              if (showResult) {
                if (index === question.correctAnswer) {
                  buttonClass += "bg-green-100 border-green-500 text-green-800";
                } else if (index === selectedAnswer) {
                  buttonClass += "bg-red-100 border-red-500 text-red-800";
                } else {
                  buttonClass += "bg-gray-100 border-gray-300 text-gray-600";
                }
              } else if (selectedAnswer === index) {
                buttonClass += "bg-blue-100 border-blue-500 text-blue-800";
              } else {
                buttonClass += "bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={buttonClass}
                >
                  <div className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3 font-semibold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-lg">{option}</span>
                    {showResult && index === question.correctAnswer && (
                      <CheckCircle className="w-6 h-6 text-green-500 ml-auto" />
                    )}
                    {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                      <XCircle className="w-6 h-6 text-red-500 ml-auto" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Result Feedback */}
        {showResult && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-md mx-4 text-center">
              {isCorrect ? (
                <>
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Correct!</h3>
                  <p className="text-gray-600">Great job! You earned 1 point.</p>
                </>
              ) : (
                <>
                  <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-red-600 mb-2">Incorrect!</h3>
                  <p className="text-gray-600">
                    The correct answer was: <strong>{question.options[question.correctAnswer]}</strong>
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};