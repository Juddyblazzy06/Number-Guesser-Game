import React from 'react';

const Message = ({ message, status, error, guessHistory }) => {
  const getMessageClass = () => {
    if (error) return 'error';
    if (status === 'won') return 'success';
    if (status === 'lost') return 'error';
    if (guessHistory.length > 0) {
      const lastGuess = guessHistory[guessHistory.length - 1];
      if (lastGuess.result === 'high') return 'high';
      if (lastGuess.result === 'low') return 'low';
    }
    return 'info';
  };

  return (
    <div className="message-container">
      {error && <p className={`message error`}>{error}</p>}
      {message && <p className={`message ${getMessageClass()}`}>{message}</p>}
      
      {guessHistory.length > 0 && (
        <div className="guess-history">
          <h4>Your Guesses:</h4>
          <div className="guess-list">
            {guessHistory.map((guess, index) => (
              <span
                key={index}
                className={`guess-badge ${guess.result}`}
                title={guess.message}
              >
                {guess.number}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;

