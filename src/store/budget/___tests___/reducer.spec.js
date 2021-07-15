import {
  ADD_FIXED_COST_ENTRY,
  CALCULATE_REMAINING_AMOUNT,
  CALCULATE_TOTAL_PERCENTAGE,
  DELETE_FIXED_COST_ENTRY,
  SET_TOTAL_BUDGET,
  UPDATE_FIXED_COST_ENTRY,
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
    expect(
      reducer(state, { type: SET_TOTAL_BUDGET, payload: { total: 3000 } })
        .totalBudget,
    ).toEqual(3000);
  });

  it('CALCULATE_TOTAL_PERCENTAGE', () => {
    expect(
      reducer(state, { type: CALCULATE_TOTAL_PERCENTAGE }).totalPercentage,
    ).toEqual(100);
  });

  it('CALCULATE_REMAINING_AMOUNT', () => {
    expect(
      reducer(state, { type: CALCULATE_REMAINING_AMOUNT }).remainingAmount,
    ).toEqual(0);
  });

  it('ADD_FIXED_COST_ENTRY', () => {
    const result = reducer(state, {
      type: ADD_FIXED_COST_ENTRY,
      payload: { name: 'insurance' },
    });

    expect(result.fixedCosts).toEqual({ rent: 1000, insurance: 0 });
    expect(result.fixedCostsPercentage).toEqual(0.3333333333333333);
    expect(result.fixedCostsTotal).toEqual(1000);
  });

  it('UPDATE_FIXED_COST_ENTRY', () => {
    const result = reducer(state, {
      type: UPDATE_FIXED_COST_ENTRY,
      payload: { name: 'rent', amount: 800 },
    });

    expect(result.fixedCosts).toEqual({ rent: 800 });
    expect(result.fixedCostsPercentage).toEqual(0.26666666666666666);
    expect(result.fixedCostsTotal).toEqual(800);
  });

  it('DELETE_FIXED_COST_ENTRY', () => {
    const result = reducer(state, {
      type: DELETE_FIXED_COST_ENTRY,
      payload: { name: 'rent' },
    });

    expect(result.fixedCosts).toEqual({});
    expect(result.fixedCostsPercentage).toEqual(0);
    expect(result.fixedCostsTotal).toEqual(0);
  });

  it('ADD_FLEXIBLE_SPENDING_ENTRY', () => {});

  it('UPDATE_FLEXIBLE_SPENDING_ENTRY', () => {});

  it('DELETE_FLEXIBLE_SPENDING_ENTRY', () => {});

  it('ADD_SAVINGS_ENTRY', () => {});

  it('UPDATE_SAVINGS_ENTRY', () => {});

  it('DELETE_SAVINGS_ENTRY', () => {});
});
