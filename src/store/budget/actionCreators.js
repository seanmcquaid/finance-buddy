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

export const calculateCategoryPercentages = () => ({
  type: CALCULATE_CATEGORY_PERCENTAGES,
});

export const calculateCategoryTotals = () => ({
  type: CALCULATE_CATEGORY_TOTALS,
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

export const deleteFixedCostEntry = (name) => ({
  type: DELETE_FIXED_COST_ENTRY,
  payload: { name },
});

export const deleteFlexibleSpendingEntry = (name) => ({
  type: DELETE_FLEXIBLE_SPENDING_ENTRY,
  payload: { name },
});

export const deleteSavingsEntry = (name) => ({
  type: DELETE_SAVINGS_ENTRY,
  payload: { name },
});
