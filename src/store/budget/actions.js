import {
  addFixedCostEntry,
  setTotalBudget,
  calculateTotalPercentage,
  calculateRemainingAmount,
  addFlexibleSpendingEntry,
  addSavingsEntry,
  updateFixedCostEntry,
  updateFlexibleSpendingEntry,
  updateSavingsEntry,
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

export const updateFixedCostEntryAction = (name, amount) => (dispatch) => {
  dispatch(updateFixedCostEntry(name, amount));
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
};

export const updateFlexibleSpendingEntryAction =
  (name, amount) => (dispatch) => {
    dispatch(updateFlexibleSpendingEntry(name, amount));
    dispatch(calculateTotalPercentage());
    dispatch(calculateRemainingAmount());
  };

export const updateSavingsEntryAction = (name, amount) => (dispatch) => {
  dispatch(updateSavingsEntry(name, amount));
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
};
