import {
  CALCULATE_ADDITIONAL_SAVINGS_NEEDED_TO_RETIRE,
  CALCULATE_AMOUNT_NEEDED_IN_RETIREMENT,
  CALCULATE_YEARS_UNTIL_RETIREMENT,
  SET_CURRENT_AMOUNT_IN_RETIREMENT,
  SET_MONTHLY_BUDGET,
} from '../actionTypes';
import reducer from '../reducer';

describe('retirement reducer', () => {
  const state = {
    monthlyBudget: 0,
    currentAmountInRetirement: 0,
    amountNeededInRetirement: 0,
    additionalSavingsNeededToRetire: 0,
    yearsUntilRetirement: 30,
  };
  it('SET_MONTHLY_BUDGET', () => {
    const action = {
      type: SET_MONTHLY_BUDGET,
      payload: { monthlyBudget: 3000 },
    };
    expect(reducer(state, action)).toEqual({
      monthlyBudget: 3000,
      currentAmountInRetirement: 0,
      amountNeededInRetirement: 0,
      additionalSavingsNeededToRetire: 0,
      yearsUntilRetirement: 30,
    });
  });

  it('SET_CURRENT_AMOUNT_IN_RETIREMENT', () => {
    const action = {
      type: SET_CURRENT_AMOUNT_IN_RETIREMENT,
      payload: { currentAmountInRetirement: 3000 },
    };
    expect(reducer(state, action)).toEqual({
      monthlyBudget: 0,
      currentAmountInRetirement: 3000,
      amountNeededInRetirement: 0,
      additionalSavingsNeededToRetire: 0,
      yearsUntilRetirement: 30,
    });
  });

  it('CALCULATE_AMOUNT_NEEDED_IN_RETIREMENT', () => {
    const action = {
      type: CALCULATE_AMOUNT_NEEDED_IN_RETIREMENT,
    };
    expect(reducer(state, action)).toEqual({
      monthlyBudget: 0,
      currentAmountInRetirement: 0,
      amountNeededInRetirement: 0,
      additionalSavingsNeededToRetire: 0,
      yearsUntilRetirement: 30,
    });
  });

  it('CALCULATE_ADDITIONAL_SAVINGS_NEEDED_TO_RETIRE', () => {
    const action = {
      type: CALCULATE_ADDITIONAL_SAVINGS_NEEDED_TO_RETIRE,
    };
    expect(reducer(state, action)).toEqual({
      monthlyBudget: 0,
      currentAmountInRetirement: 0,
      amountNeededInRetirement: 0,
      additionalSavingsNeededToRetire: 0,
      yearsUntilRetirement: 30,
    });
  });

  it('CALCULATE_YEARS_UNTIL_RETIREMENT', () => {
    const action = {
      type: CALCULATE_YEARS_UNTIL_RETIREMENT,
    };
    expect(reducer(state, action)).toEqual({
      monthlyBudget: 0,
      currentAmountInRetirement: 0,
      amountNeededInRetirement: 0,
      additionalSavingsNeededToRetire: 0,
      yearsUntilRetirement: 0,
    });
  });
});
