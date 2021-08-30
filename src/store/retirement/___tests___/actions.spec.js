import configureMockStore from '../../../testUtils/configureMockStore';
import {
  setCurrentAmountInRetirementAction,
  setMonthlyBudgetAction,
} from '../actions';

describe('retirement actions', () => {
  const state = {
    retirement: {
      monthlyBudget: 0,
      currentAmountInRetirement: 0,
      amountNeededInRetirement: 0,
      additionalSavingsNeededToRetire: 0,
      yearsUntilRetirement: 30,
    },
  };
  const store = configureMockStore(state);

  afterEach(() => {
    store.clearActions();
  });

  it('setMonthlyBudgetAction', () => {
    store.dispatch(setMonthlyBudgetAction(3000));

    const result = [
      { type: 'SET_MONTHLY_BUDGET', payload: { monthlyBudget: 3000 } },
      { type: 'CALCULATE_AMOUNT_NEEDED_IN_RETIREMENT' },
      { type: 'CALCULATE_ADDITIONAL_SAVINGS_NEEDED_TO_RETIRE' },
      { type: 'CALCULATE_YEARS_UNTIL_RETIREMENT' },
    ];

    expect(result).toEqual(store.getActions());
  });

  it('setCurrentAmountInRetirementAction', () => {
    store.dispatch(setCurrentAmountInRetirementAction(3000));

    const result = [
      {
        type: 'SET_CURRENT_AMOUNT_IN_RETIREMENT',
        payload: { currentAmountInRetirement: 3000 },
      },
      { type: 'CALCULATE_AMOUNT_NEEDED_IN_RETIREMENT' },
      { type: 'CALCULATE_ADDITIONAL_SAVINGS_NEEDED_TO_RETIRE' },
      { type: 'CALCULATE_YEARS_UNTIL_RETIREMENT' },
    ];

    expect(result).toEqual(store.getActions());
  });
});
