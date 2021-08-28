import {
  additionalSavingsNeededToRetireSelector,
  amountNeededInRetirementSelector,
  currentAmountInRetirementSelector,
  monthlyBudgetSelector,
  retirementSelector,
  yearsUntilRetirementSelector,
} from '../selectors';

describe('retirement selectors', () => {
  const state = {
    retirement: {
      monthlyBudget: 0,
      currentAmountInRetirement: 0,
      amountNeededInRetirement: 0,
      additionalSavingsNeededToRetire: 0,
      yearsUntilRetirement: 30,
    },
  };

  it('retirementSelector', () => {
    expect(retirementSelector(state)).toEqual({
      monthlyBudget: 0,
      currentAmountInRetirement: 0,
      amountNeededInRetirement: 0,
      additionalSavingsNeededToRetire: 0,
      yearsUntilRetirement: 30,
    });
  });

  it('monthlyBudgetSelector', () => {
    expect(monthlyBudgetSelector(state)).toEqual(0);
  });

  it('currentAmountInRetirementSelector', () => {
    expect(currentAmountInRetirementSelector(state)).toEqual(0);
  });

  it('amountNeededInRetirementSelector', () => {
    expect(amountNeededInRetirementSelector(state)).toEqual(0);
  });

  it('additionalSavingsNeededToRetireSelector', () => {
    expect(additionalSavingsNeededToRetireSelector(state)).toEqual(0);
  });

  it('yearsUntilRetirementSelector', () => {
    expect(yearsUntilRetirementSelector(state)).toEqual(30);
  });
});
