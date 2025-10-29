import { describe, it, expect, vi } from 'vitest';
import {
  generateSecretNumber,
  evaluateGuess,
  validateInput,
  getGuessLimit,
} from '../gameLogic';

describe('gameLogic', () => {
  describe('generateSecretNumber', () => {
    it('should generate a number within the default range (1-100)', () => {
      const number = generateSecretNumber();
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(100);
    });

    it('should generate a number within custom range', () => {
      const number = generateSecretNumber(10, 20);
      expect(number).toBeGreaterThanOrEqual(10);
      expect(number).toBeLessThanOrEqual(20);
    });

    it('should handle min and max being the same', () => {
      const number = generateSecretNumber(5, 5);
      expect(number).toBe(5);
    });

    it('should generate different numbers on multiple calls', () => {
      const numbers = Array.from({ length: 10 }, () => generateSecretNumber());
      const uniqueNumbers = new Set(numbers);
      // High probability that at least 2 different numbers are generated
      expect(uniqueNumbers.size).toBeGreaterThan(1);
    });
  });

  describe('evaluateGuess', () => {
    it('should return correct status when guess matches secret number', () => {
      const result = evaluateGuess(50, 50);
      expect(result.status).toBe('correct');
      expect(result.message).toContain('Congratulations');
    });

    it('should return high status when guess is greater than secret', () => {
      const result = evaluateGuess(75, 50);
      expect(result.status).toBe('high');
      expect(result.message).toContain('Too high');
    });

    it('should return low status when guess is less than secret', () => {
      const result = evaluateGuess(25, 50);
      expect(result.status).toBe('low');
      expect(result.message).toContain('Too low');
    });

    it('should handle edge cases correctly', () => {
      const result1 = evaluateGuess(100, 100);
      expect(result1.status).toBe('correct');

      const result2 = evaluateGuess(1, 1);
      expect(result2.status).toBe('correct');

      const result3 = evaluateGuess(1, 100);
      expect(result3.status).toBe('low');

      const result4 = evaluateGuess(100, 1);
      expect(result4.status).toBe('high');
    });
  });

  describe('validateInput', () => {
    it('should validate number within valid range', () => {
      const result = validateInput(50);
      expect(result.valid).toBe(true);
      expect(result.message).toBe('');
    });

    it('should reject NaN', () => {
      const result = validateInput(NaN);
      expect(result.valid).toBe(false);
      expect(result.message).toContain('valid number');
    });

    it('should reject number below minimum', () => {
      const result = validateInput(0, 1, 100);
      expect(result.valid).toBe(false);
      expect(result.message).toContain('between');
    });

    it('should reject number above maximum', () => {
      const result = validateInput(101, 1, 100);
      expect(result.valid).toBe(false);
      expect(result.message).toContain('between');
    });

    it('should accept boundary values', () => {
      const result1 = validateInput(1, 1, 100);
      expect(result1.valid).toBe(true);

      const result2 = validateInput(100, 1, 100);
      expect(result2.valid).toBe(true);
    });

    it('should work with custom range', () => {
      const result1 = validateInput(5, 10, 20);
      expect(result1.valid).toBe(false);

      const result2 = validateInput(15, 10, 20);
      expect(result2.valid).toBe(true);

      const result3 = validateInput(25, 10, 20);
      expect(result3.valid).toBe(false);
    });
  });

  describe('getGuessLimit', () => {
    it('should return correct limit for easy difficulty', () => {
      expect(getGuessLimit('easy')).toBe(15);
    });

    it('should return correct limit for medium difficulty', () => {
      expect(getGuessLimit('medium')).toBe(10);
    });

    it('should return correct limit for hard difficulty', () => {
      expect(getGuessLimit('hard')).toBe(5);
    });

    it('should return default limit for unknown difficulty', () => {
      expect(getGuessLimit('unknown')).toBe(10);
    });

    it('should handle undefined difficulty', () => {
      expect(getGuessLimit(undefined)).toBe(10);
    });
  });
});

