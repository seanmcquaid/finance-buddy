import {
  addFixedCostEntry,
  addFlexibleSpendingEntry,
  addSavingsEntry,
  calculateRemainingAmount,
  calculateTotalPercentage,
  deleteFixedCostEntry,
  deleteFlexibleSpendingEntry,
  deleteSavingsEntry,
  setTotalBudget,
  updateFixedCostEntry,
  updateFlexibleSpendingEntry,
  updateSavingsEntry,
} from '../actionCreators';
import {
  ADD_FIXED_COST_ENTRY,
  ADD_FLEXIBLE_SPENDING_ENTRY,
  ADD_SAVINGS_ENTRY,
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

describe('budget actionCreators', () => {
  it('setTotalBudget', () => {
    expect(setTotalBudget(100)).toEqual({
      type: SET_TOTAL_BUDGET,
      payload: { total: 100 },
    });
  });

  it('calculateTotalPercentage', () => {
    expect(calculateTotalPercentage()).toEqual({
      type: CALCULATE_TOTAL_PERCENTAGE,
    });
  });

  it('calculateRemainingAmount', () => {
    expect(calculateRemainingAmount()).toEqual({
      type: CALCULATE_REMAINING_AMOUNT,
    });
  });

  it('addFixedCostEntry', () => {
    expect(addFixedCostEntry('rent')).toEqual({
      type: ADD_FIXED_COST_ENTRY,
      payload: { name: 'rent' },
    });
  });

  it('addFlexibleSpendingEntry', () => {
    expect(addFlexibleSpendingEntry('food')).toEqual({
      type: ADD_FLEXIBLE_SPENDING_ENTRY,
      payload: { name: 'food' },
    });
  });

  it('addSavingsEntry', () => {
    expect(addSavingsEntry('chase')).toEqual({
      type: ADD_SAVINGS_ENTRY,
      payload: { name: 'chase' },
    });
  });

  it('updateFixedCostEntry', () => {
    expect(updateFixedCostEntry('rent', 1000)).toEqual({
      type: UPDATE_FIXED_COST_ENTRY,
      payload: { name: 'rent', amount: 1000 },
    });
  });

  it('updateFlexibleSpendingEntry', () => {
    expect(updateFlexibleSpendingEntry('food', 100)).toEqual({
      type: UPDATE_FLEXIBLE_SPENDING_ENTRY,
      payload: { name: 'food', amount: 100 },
    });
  });

  it('updateSavingsEntry', () => {
    expect(updateSavingsEntry('chase', 2000)).toEqual({
      type: UPDATE_SAVINGS_ENTRY,
      payload: { name: 'chase', amount: 2000 },
    });
  });

  it('deleteFixedCostEntry', () => {
    expect(deleteFixedCostEntry('rent')).toEqual({
      type: DELETE_FIXED_COST_ENTRY,
      payload: { name: 'rent' },
    });
  });

  it('deleteFlexibleSpendingEntry', () => {
    expect(deleteFlexibleSpendingEntry('food')).toEqual({
      type: DELETE_FLEXIBLE_SPENDING_ENTRY,
      payload: { name: 'food' },
    });
  });

  it('deleteSavingsEntry', () => {
    expect(deleteSavingsEntry('chase')).toEqual({
      type: DELETE_SAVINGS_ENTRY,
      payload: { name: 'chase' },
    });
  });
});
