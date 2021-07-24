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

export const calculateTotalsAction = () => (dispatch) => {
  dispatch(calculateCategoryPercentages());
  dispatch(calculateCategoryTotals());
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
};

export const setTotalBudgetAction = (total) => (dispatch) => {
  dispatch(setTotalBudget(total));
  dispatch(calculateTotalsAction());
};

export const addFixedCostEntryAction = (name) => (dispatch) => {
  dispatch(addFixedCostEntry(name));
  dispatch(calculateTotalsAction());
};

export const addFlexibleSpendingEntryAction = (name) => (dispatch) => {
  dispatch(addFlexibleSpendingEntry(name));
  dispatch(calculateTotalsAction());
};

export const addSavingsEntryAction = (name) => (dispatch) => {
  dispatch(addSavingsEntry(name));
  dispatch(calculateTotalsAction());
};

export const updateFixedCostEntryAction = (name, amount) => (dispatch) => {
  dispatch(updateFixedCostEntry(name, amount));
  dispatch(calculateTotalsAction());
};

export const updateFlexibleSpendingEntryAction =
  (name, amount) => (dispatch) => {
    dispatch(updateFlexibleSpendingEntry(name, amount));
    dispatch(calculateTotalsAction());
  };

export const updateSavingsEntryAction = (name, amount) => (dispatch) => {
  dispatch(updateSavingsEntry(name, amount));
  dispatch(calculateTotalsAction());
};

export const deleteFixedCostEntryAction = (name) => (dispatch) => {
  dispatch(deleteFixedCostEntry(name));
  dispatch(calculateTotalsAction());
};

export const deleteFlexibleSpendingEntryAction = (name) => (dispatch) => {
  dispatch(deleteFlexibleSpendingEntry(name));
  dispatch(calculateTotalsAction());
};

export const deleteSavingsEntryAction = (name) => (dispatch) => {
  dispatch(deleteSavingsEntry(name));
  dispatch(calculateTotalsAction());
};
