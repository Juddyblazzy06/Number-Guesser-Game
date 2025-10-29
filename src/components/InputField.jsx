import React from 'react';

const InputField = ({ value, onChange, onGuess, onKeyPress, disabled, placeholder }) => {
  return (
    <div className="input-container">
      <input
        type="number"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        disabled={disabled}
        placeholder={placeholder}
        className="guess-input"
        min="1"
        max="100"
      />
      <button
        onClick={onGuess}
        disabled={disabled}
        className="guess-button"
      >
        Guess
      </button>
    </div>
  );
};

export default InputField;

