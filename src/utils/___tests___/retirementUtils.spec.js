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

  it('calculateYearsUntilRetirement', () => {
    expect(calculateYearsUntilRetirement(900000, 17500)).toEqual(52);
  });
});
