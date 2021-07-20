import { digitsOnly } from '../formValidationUtils';

describe('formValidationUtils', () => {
  describe('digitsOnly', () => {
    it('returns true when only numbers are in a string', () => {
      expect(digitsOnly('0')).toBeTruthy();
    });

    it('returns false when no numbers are in a string', () => {
      expect(digitsOnly('hello')).toBeFalsy();
    });

    it('returns true when providing a number', () => {
      expect(digitsOnly(0)).toBeTruthy();
    });
  });
});
