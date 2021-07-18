import configureMockStore from '../../../testUtils/configureMockStore';
import {
  addFixedCostEntryAction,
  addFlexibleSpendingEntryAction,
  addSavingsEntryAction,
  setTotalBudgetAction,
  updateFixedCostEntryAction,
  updateFlexibleSpendingEntryAction,
} from '../actions';

describe('budget actions', () => {
  const state = {
    budget: {
      fixedCostsPercentage: 0,
      fixedCosts: {},
      fixedCostsTotal: 0,
      flexibleSpendingPercentage: 0,
      flexibleSpending: {},
      flexibleSpendingTotal: 0,
      savingsPercentage: 0,
      savings: {},
      savingsTotal: 0,
      totalBudget: 0,
      remainingAmount: 0,
      totalPercentage: 100,
    },
  };
  const store = configureMockStore(state);

  afterEach(() => {
    store.clearActions();
  });

  it('setTotalBudgetAction', () => {
    store.dispatch(setTotalBudgetAction(1000));

    const result = [{ type: 'SET_TOTAL_BUDGET', payload: { total: 1000 } }];

    expect(result).toEqual(store.getActions());
  });

  it('addFixedCostEntryAction', () => {
    store.dispatch(addFixedCostEntryAction('rent'));

    const result = [
      { type: 'ADD_FIXED_COST_ENTRY', payload: { name: 'rent' } },
      { type: 'CALCULATE_CATEGORY_PERCENTAGES' },
      { type: 'CALCULATE_CATEGORY_TOTALS' },
      { type: 'CALCULATE_TOTAL_PERCENTAGE' },
      { type: 'CALCULATE_REMAINING_AMOUNT' },
    ];

    expect(result).toEqual(store.getActions());
  });

  it('addFlexibleSpendingEntryAction', () => {
    store.dispatch(addFlexibleSpendingEntryAction('food'));

    const result = [
      { type: 'ADD_FlEXIBLE_SPENDING_ENTRY', payload: { name: 'food' } },
      { type: 'CALCULATE_CATEGORY_PERCENTAGES' },
      { type: 'CALCULATE_CATEGORY_TOTALS' },
      { type: 'CALCULATE_TOTAL_PERCENTAGE' },
      { type: 'CALCULATE_REMAINING_AMOUNT' },
    ];

    expect(result).toEqual(store.getActions());
  });

  it('addSavingsEntryAction', () => {
    store.dispatch(addSavingsEntryAction('savings'));

    const result = [
      { type: 'ADD_SAVINGS_ENTRY', payload: { name: 'savings' } },
      { type: 'CALCULATE_CATEGORY_PERCENTAGES' },
      { type: 'CALCULATE_CATEGORY_TOTALS' },
      { type: 'CALCULATE_TOTAL_PERCENTAGE' },
      { type: 'CALCULATE_REMAINING_AMOUNT' },
    ];

    expect(result).toEqual(store.getActions());
  });

  it('updateFixedCostEntryAction', () => {
    store.dispatch(updateFixedCostEntryAction('fixedCost', 100));

    const result = [
      {
        type: 'UPDATE_FIXED_COST_ENTRY',
        payload: { name: 'fixedCost', amount: 100 },
      },
      { type: 'CALCULATE_CATEGORY_PERCENTAGES' },
      { type: 'CALCULATE_CATEGORY_TOTALS' },
      { type: 'CALCULATE_TOTAL_PERCENTAGE' },
      { type: 'CALCULATE_REMAINING_AMOUNT' },
    ];

    expect(result).toEqual(store.getActions());
  });

  it('updateFlexibleSpendingEntryAction', () => {
    store.dispatch(updateFlexibleSpendingEntryAction('flexibleSpending', 100));

    const result = [
      {
        type: 'UPDATE_FlEXIBLE_SPENDING_ENTRY',
        payload: { name: 'flexibleSpending', amount: 100 },
      },
      { type: 'CALCULATE_CATEGORY_PERCENTAGES' },
      { type: 'CALCULATE_CATEGORY_TOTALS' },
      { type: 'CALCULATE_TOTAL_PERCENTAGE' },
      { type: 'CALCULATE_REMAINING_AMOUNT' },
    ];

    console.log(store.getActions());

    expect(result).toEqual(store.getActions());
  });

  it('updateSavingsEntryAction', () => {});

  it('deleteFixedCostEntryAction', () => {});

  it('deleteFlexibleSpendingEntryAction', () => {});

  it('deleteSavingsEntryAction', () => {});
});
