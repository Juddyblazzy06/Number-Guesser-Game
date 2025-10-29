import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import Message from './Message';
import { generateSecretNumber, evaluateGuess, validateInput, getGuessLimit } from '../utils/gameLogic';

const Game = ({ difficulty = 'medium', onRestart }) => {
  const [secretNumber, setSecretNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [remainingGuesses, setRemainingGuesses] = useState(10);
  const [gameStatus, setGameStatus] = useState('playing'); // playing, won, lost
  const [guessHistory, setGuessHistory] = useState([]);
  const [error, setError] = useState('');

  const guessLimit = getGuessLimit(difficulty);

  // Initialize game
  useEffect(() => {
    startNewGame();
  }, [difficulty]);

  const startNewGame = () => {
    setSecretNumber(generateSecretNumber());
    setGuess('');
    setMessage('Guess a number between 1 and 100!');
    setRemainingGuesses(guessLimit);
    setGameStatus('playing');
    setGuessHistory([]);
    setError('');
  };

  const handleGuess = () => {
    // Reset error
    setError('');

    // Validate input
    const validation = validateInput(Number(guess));
    if (!validation.valid) {
      setError(validation.message);
      return;
    }

    const guessNum = Number(guess);

    // Check if already guessed
    if (guessHistory.some(g => g.number === guessNum)) {
      setError('You already guessed that number!');
      return;
    }

    // Evaluate guess
    const result = evaluateGuess(guessNum, secretNumber);

    // Update game state
    const newGuess = {
      number: guessNum,
      result: result.status,
      message: result.message,
    };

    setGuessHistory([...guessHistory, newGuess]);

    if (result.status === 'correct') {
      setGameStatus('won');
      setMessage(`🎉 ${result.message} You got it in ${guessHistory.length + 1} ${guessHistory.length + 1 === 1 ? 'guess' : 'guesses'}!`);
    } else {
      const newRemaining = remainingGuesses - 1;
      setRemainingGuesses(newRemaining);
      
      setMessage(result.message);

      if (newRemaining === 0) {
        setGameStatus('lost');
        setMessage(`😢 Game Over! The secret number was ${secretNumber}.`);
      }
    }

    setGuess('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && gameStatus === 'playing') {
      handleGuess();
    }
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <h2>Guess the Number</h2>
        <p className="difficulty">Difficulty: <span className="difficulty-badge">{difficulty}</span></p>
        <p className="remaining-guesses">
          Remaining Guesses: <span className="guesses-count">{remainingGuesses}</span>
        </p>
      </div>

      <Message 
        message={message} 
        status={gameStatus} 
        error={error}
        guessHistory={guessHistory}
      />

      <InputField
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        onGuess={handleGuess}
        onKeyPress={handleKeyPress}
        disabled={gameStatus !== 'playing'}
        placeholder="Enter your guess (1-100)"
      />

      {gameStatus !== 'playing' && (
        <button className="restart-button" onClick={onRestart}>
          Play Again
        </button>
      )}
    </div>
  );
};

export default Game;

