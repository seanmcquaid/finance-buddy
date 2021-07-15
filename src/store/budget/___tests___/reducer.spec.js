import {
  ADD_FIXED_COST_ENTRY,
  ADD_FLEXIBLE_SPENDING_ENTRY,
  ADD_SAVINGS_ENTRY,
  CALCULATE_CATEGORY_PERCENTAGES,
  CALCULATE_CATEGORY_TOTALS,
  CALCULATE_REMAINING_AMOUNT,
  CALCULATE_TOTAL_PERCENTAGE,
  DELETE_FIXED_COST_ENTRY,
  DELETE_FLEXIBLE_SPENDING_ENTRY,
  DELETE_SAVINGS_ENTRY,
  SET_TOTAL_BUDGET,
  UPDATE_FIXED_COST_ENTRY,
  UPDATE_FLEXIBLE_SPENDING_ENTRY,
  UPDATE_SAVINGS_ENTRY,
} from '../actionTypes';
import reducer from '../reducer';

describe('budget reducer', () => {
  const state = {
    fixedCostsPercentage: 0.3,
    fixedCosts: { rent: 1000 },
    fixedCostsTotal: 0,
    flexibleSpendingPercentage: 0.2,
    flexibleSpending: {
      food: 500,
    },
    flexibleSpendingTotal: 0,
    savingsPercentage: 0.5,
    savings: {
      chase: 1500,
    },
    savingsTotal: 0,
    totalBudget: 3000,
    remainingAmount: 0,
    totalPercentage: 100,
  };
  it('SET_TOTAL_BUDGET', () => {
    const result = reducer(state, {
      type: SET_TOTAL_BUDGET,
      payload: { total: 3000 },
    });
    expect(result.totalBudget).toEqual(3000);
  });

  it('CALCULATE_TOTAL_PERCENTAGE', () => {
    const result = reducer(state, { type: CALCULATE_TOTAL_PERCENTAGE });
    expect(result.totalPercentage).toEqual(100);
  });

  it('CALCULATE_REMAINING_AMOUNT', () => {
    const result = reducer(state, { type: CALCULATE_REMAINING_AMOUNT });
    expect(result.remainingAmount).toEqual(0);
  });

  it('ADD_FIXED_COST_ENTRY', () => {
    const result = reducer(state, {
      type: ADD_FIXED_COST_ENTRY,
      payload: { name: 'insurance' },
    });

    expect(result.fixedCosts).toEqual({ rent: 1000, insurance: 0 });
  });

  it('UPDATE_FIXED_COST_ENTRY', () => {
    const result = reducer(state, {
      type: UPDATE_FIXED_COST_ENTRY,
      payload: { name: 'rent', amount: 800 },
    });

    expect(result.fixedCosts).toEqual({ rent: 800 });
  });

  it('DELETE_FIXED_COST_ENTRY', () => {
    const result = reducer(state, {
      type: DELETE_FIXED_COST_ENTRY,
      payload: { name: 'rent' },
    });

    expect(result.fixedCosts).toEqual({});
  });

  it('ADD_FLEXIBLE_SPENDING_ENTRY', () => {
    const result = reducer(state, {
      type: ADD_FLEXIBLE_SPENDING_ENTRY,
      payload: { name: 'shrimp' },
    });

    expect(result.flexibleSpending).toEqual({ food: 500, shrimp: 0 });
  });

  it('UPDATE_FLEXIBLE_SPENDING_ENTRY', () => {
    const result = reducer(state, {
      type: UPDATE_FLEXIBLE_SPENDING_ENTRY,
      payload: { name: 'food', amount: 800 },
    });

    expect(result.flexibleSpending).toEqual({ food: 800 });
  });

  it('DELETE_FLEXIBLE_SPENDING_ENTRY', () => {
    const result = reducer(state, {
      type: DELETE_FLEXIBLE_SPENDING_ENTRY,
      payload: { name: 'food' },
    });

    expect(result.flexibleSpending).toEqual({});
  });

  it('ADD_SAVINGS_ENTRY', () => {
    const result = reducer(state, {
      type: ADD_SAVINGS_ENTRY,
      payload: { name: 'venmo' },
    });

    expect(result.savings).toEqual({ chase: 1500, venmo: 0 });
  });

  it('UPDATE_SAVINGS_ENTRY', () => {
    const result = reducer(state, {
      type: UPDATE_SAVINGS_ENTRY,
      payload: { name: 'chase', amount: 800 },
    });

    expect(result.savings).toEqual({ chase: 800 });
  });

  it('DELETE_SAVINGS_ENTRY', () => {
    const result = reducer(state, {
      type: DELETE_SAVINGS_ENTRY,
      payload: { name: 'chase' },
    });

    expect(result.savings).toEqual({});
  });

  it('CALCULATE_CATEGORY_PERCENTAGES', () => {
    const result = reducer(state, {
      type: CALCULATE_CATEGORY_PERCENTAGES,
    });
    expect(result.fixedCostsPercentage).toEqual(0.3333333333333333);
    expect(result.flexibleSpendingPercentage).toEqual(0.16666666666666666);
    expect(result.savingsPercentage).toEqual(0.5);
  });

  it('CALCULATE_CATEGORY_TOTALS', () => {
    const result = reducer(state, {
      type: CALCULATE_CATEGORY_TOTALS,
    });
    expect(result.fixedCostsTotal).toEqual(1000);
    expect(result.flexibleSpendingTotal).toEqual(500);
    expect(result.savingsTotal).toEqual(1500);
  });
});
