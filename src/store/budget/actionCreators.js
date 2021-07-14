import {
  ADD_FIXED_COST_ENTRY,
  ADD_FLEXIBLE_SPENDING_ENTRY,
  ADD_SAVINGS_ENTRY,
  CALCULATE_REMAINING_AMOUNT,
  CALCULATE_TOTAL_PERCENTAGE,
  REMOVE_FIXED_COST_ENTRY,
  REMOVE_FLEXIBLE_SPENDING_ENTRY,
  REMOVE_SAVINGS_ENTRY,
  SET_TOTAL_BUDGET,
  UPDATE_FIXED_COST_ENTRY,
  UPDATE_FLEXIBLE_SPENDING_ENTRY,
  UPDATE_SAVINGS_ENTRY,
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

export const updateFixedCostEntry = (name, amount) => ({
  type: UPDATE_FIXED_COST_ENTRY,
  payload: { name, amount },
});

export const updateFlexibleSpendingEntry = (name, amount) => ({
  type: UPDATE_FLEXIBLE_SPENDING_ENTRY,
  payload: { name, amount },
});

export const updateSavingsEntry = (name, amount) => ({
  type: UPDATE_SAVINGS_ENTRY,
  payload: { name, amount },
});

export const removeFixedCostEntry = (name) => ({
  type: REMOVE_FIXED_COST_ENTRY,
  payload: { name },
});

export const removeFlexibleSpendingEntry = (name) => ({
  type: REMOVE_FLEXIBLE_SPENDING_ENTRY,
  payload: { name },
});

export const removeSavingsEntry = (name) => ({
  type: REMOVE_SAVINGS_ENTRY,
  payload: { name },
});
