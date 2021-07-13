import {
  addFixedCostEntry,
  setTotalBudget,
  calculateTotalPercentage,
  calculateRemainingAmount,
  addFlexibleSpendingEntry,
  addSavingsEntry,
} from './actionCreators';

export const setTotalBudgetAction = (total) => (dispatch) =>
  dispatch(setTotalBudget(total));

export const addFixedCostEntryAction = (name) => (dispatch) => {
  dispatch(addFixedCostEntry(name));
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
};

export const addFlexibleSpendingEntryAction = (name) => (dispatch) => {
  dispatch(addFlexibleSpendingEntry(name));
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
};

export const addSavingsEntryAction = (name) => (dispatch) => {
  dispatch(addSavingsEntry(name));
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
};
