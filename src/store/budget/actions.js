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
  deleteFixedCostEntry,
  deleteFlexibleSpendingEntry,
  deleteSavingsEntry,
  calculateCategoryPercentages,
  calculateCategoryTotals,
} from './actionCreators';

export const calculateTotals = () => (dispatch) => {
  dispatch(calculateCategoryPercentages());
  dispatch(calculateCategoryTotals());
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
};

export const setTotalBudgetAction = (total) => (dispatch) => {
  dispatch(setTotalBudget(total));
  dispatch(calculateTotals());
};

export const addFixedCostEntryAction = (name) => (dispatch) => {
  dispatch(addFixedCostEntry(name));
  dispatch(calculateTotals());
};

export const addFlexibleSpendingEntryAction = (name) => (dispatch) => {
  dispatch(addFlexibleSpendingEntry(name));
  dispatch(calculateTotals());
};

export const addSavingsEntryAction = (name) => (dispatch) => {
  dispatch(addSavingsEntry(name));
  dispatch(calculateTotals());
};

export const updateFixedCostEntryAction = (name, amount) => (dispatch) => {
  dispatch(updateFixedCostEntry(name, amount));
  dispatch(calculateTotals());
};

export const updateFlexibleSpendingEntryAction =
  (name, amount) => (dispatch) => {
    dispatch(updateFlexibleSpendingEntry(name, amount));
    dispatch(calculateTotals());
  };

export const updateSavingsEntryAction = (name, amount) => (dispatch) => {
  dispatch(updateSavingsEntry(name, amount));
  dispatch(calculateTotals());
};

export const deleteFixedCostEntryAction = (name) => (dispatch) => {
  dispatch(deleteFixedCostEntry(name));
  dispatch(calculateTotals());
};

export const deleteFlexibleSpendingEntryAction = (name) => (dispatch) => {
  dispatch(deleteFlexibleSpendingEntry(name));
  dispatch(calculateTotals());
};

export const deleteSavingsEntryAction = (name) => (dispatch) => {
  dispatch(deleteSavingsEntry(name));
  dispatch(calculateTotals());
};
