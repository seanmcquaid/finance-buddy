import {
  calculateAdditionalSavingsNeededToRetire,
  calculateTotalNeededToRetire,
  calculateYearsUntilRetirement,
} from '../retirementUtils';

describe('retirementUtils', () => {
  it('calculateTotalNeededToRetire', () => {
    expect(calculateTotalNeededToRetire(3000)).toEqual(900000);
  });

  it('calculateAdditionalSavingsNeededToRetire', () => {
    expect(calculateAdditionalSavingsNeededToRetire(900000, 30000)).toEqual(
      870000,
    );
  });

  describe('calculateYearsUntilRetirement', () => {
    it('returns 0 if invalid number result could occur', () => {
      expect(calculateYearsUntilRetirement(0, 0)).toEqual(0);
    });

    it('returns correct calculation', () => {
      expect(calculateYearsUntilRetirement(900000, 17500)).toEqual(52);
    });
  });
});
