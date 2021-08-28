import {
  calculateAdditionalSavingsNeededToRetire,
  calculateAmountNeededInRetirement,
  calculateYearsUntilRetirement,
  setCurrentAmountInRetirement,
  setMonthlyBudget,
} from '../actionCreators';
import {
  CALCULATE_ADDITIONAL_SAVINGS_NEEDED_TO_RETIRE,
  CALCULATE_AMOUNT_NEEDED_IN_RETIREMENT,
  CALCULATE_YEARS_UNTIL_RETIREMENT,
  SET_CURRENT_AMOUNT_IN_RETIREMENT,
  SET_MONTHLY_BUDGET,
} from '../actionTypes';

describe('retirement actionCreators', () => {
  it('setMonthlyBudget', () => {
    expect(setMonthlyBudget(3000)).toEqual({
      type: SET_MONTHLY_BUDGET,
      payload: { monthlyBudget: 3000 },
    });
  });

  it('setCurrentAmountInRetirement', () => {
    expect(setCurrentAmountInRetirement(3000)).toEqual({
      type: SET_CURRENT_AMOUNT_IN_RETIREMENT,
      payload: { currentAmountInRetirement: 3000 },
    });
  });

  it('calculateAmountNeededInRetirement', () => {
    expect(calculateAmountNeededInRetirement()).toEqual({
      type: CALCULATE_AMOUNT_NEEDED_IN_RETIREMENT,
    });
  });

  it('calculateAdditionalSavingsNeededToRetire', () => {
    expect(calculateAdditionalSavingsNeededToRetire()).toEqual({
      type: CALCULATE_ADDITIONAL_SAVINGS_NEEDED_TO_RETIRE,
    });
  });

  it('calculateYearsUntilRetirement', () => {
    expect(calculateYearsUntilRetirement()).toEqual({
      type: CALCULATE_YEARS_UNTIL_RETIREMENT,
    });
  });
});
