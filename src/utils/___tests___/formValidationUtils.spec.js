import { atLeastOneCharacter } from '../formValidationUtils';

describe('formValidationUtils', () => {
  describe('atLeastOneCharacter', () => {
    it('returns true when there is more than one character', () => {
      expect(atLeastOneCharacter('hello')).toBeTruthy();
    });

    it('returns false when there is less than one character', () => {
      expect(atLeastOneCharacter('')).toBeFalsy();
    });
  });
});
