import React from 'react';

const DifficultySelector = ({ difficulty, onDifficultyChange, disabled }) => {
  const difficulties = [
    { value: 'easy', label: 'Easy', description: '15 guesses' },
    { value: 'medium', label: 'Medium', description: '10 guesses' },
    { value: 'hard', label: 'Hard', description: '5 guesses' },
  ];

  return (
    <div className="difficulty-selector">
      <label>Select Difficulty:</label>
      <div className="difficulty-buttons">
        {difficulties.map((diff) => (
          <button
            key={diff.value}
            onClick={() => onDifficultyChange(diff.value)}
            disabled={disabled}
            className={`difficulty-button ${difficulty === diff.value ? 'active' : ''}`}
            title={diff.description}
          >
            {diff.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DifficultySelector;

