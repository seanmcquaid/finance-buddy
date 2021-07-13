import {
  ADD_FIXED_COST_ENTRY,
  ADD_FLEXIBLE_SPENDING_ENTRY,
  ADD_SAVINGS_ENTRY,
  CALCULATE_REMAINING_AMOUNT,
  CALCULATE_TOTAL_PERCENTAGE,
  SET_TOTAL_BUDGET,
} from './actionTypes';

export const setTotalBudget = (total) => ({
  type: SET_TOTAL_BUDGET,
  payload: { total },
});

export const calculateTotalPercentage = () => ({
  type: CALCULATE_TOTAL_PERCENTAGE,
});

export const calculateRemainingAmount = () => ({
  type: CALCULATE_REMAINING_AMOUNT,
});

export const addFixedCostEntry = (name) => ({
  type: ADD_FIXED_COST_ENTRY,
  payload: { name },
});

export const addFlexibleSpendingEntry = (name) => ({
  type: ADD_FLEXIBLE_SPENDING_ENTRY,
  payload: { name },
});

export const addSavingsEntry = (name) => ({
  type: ADD_SAVINGS_ENTRY,
  payload: { name },
});
