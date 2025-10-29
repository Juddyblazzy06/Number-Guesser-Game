/**
 * Generate a random number between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random number
 */
export const generateSecretNumber = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Evaluate a guess against the secret number
 * @param {number} guess - The user's guess
 * @param {number} secretNumber - The secret number to guess
 * @returns {object} Result object with status and message
 */
export const evaluateGuess = (guess, secretNumber) => {
  if (guess === secretNumber) {
    return { status: 'correct', message: 'Congratulations! You guessed it!' };
  } else if (guess > secretNumber) {
    return { status: 'high', message: 'Too high! Try again.' };
  } else {
    return { status: 'low', message: 'Too low! Try again.' };
  }
};

/**
 * Validate if a number is within the valid range
 * @param {number} number - Number to validate
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {object} Validation result
 */
export const validateInput = (number, min = 1, max = 100) => {
  if (isNaN(number)) {
    return { valid: false, message: 'Please enter a valid number.' };
  }
  if (number < min || number > max) {
    return { valid: false, message: `Please enter a number between ${min} and ${max}.` };
  }
  return { valid: true, message: '' };
};

/**
 * Get guess limit based on difficulty level
 * @param {string} difficulty - Difficulty level
 * @returns {number} Number of allowed guesses
 */
export const getGuessLimit = (difficulty) => {
  const limits = {
    easy: 15,
    medium: 10,
    hard: 5,
  };
  return limits[difficulty] || 10;
};

