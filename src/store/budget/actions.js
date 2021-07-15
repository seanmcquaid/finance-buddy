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

export const setTotalBudgetAction = (total) => (dispatch) =>
  dispatch(setTotalBudget(total));

export const addFixedCostEntryAction = (name) => (dispatch) => {
  dispatch(addFixedCostEntry(name));
  dispatch(calculateCategoryPercentages());
  dispatch(calculateCategoryTotals());
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
};

export const addFlexibleSpendingEntryAction = (name) => (dispatch) => {
  dispatch(addFlexibleSpendingEntry(name));
  dispatch(calculateCategoryPercentages());
  dispatch(calculateCategoryTotals());
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
};

export const addSavingsEntryAction = (name) => (dispatch) => {
  dispatch(addSavingsEntry(name));
  dispatch(calculateCategoryPercentages());
  dispatch(calculateCategoryTotals());
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
};

export const updateFixedCostEntryAction = (name, amount) => (dispatch) => {
  dispatch(updateFixedCostEntry(name, amount));
  dispatch(calculateCategoryPercentages());
  dispatch(calculateCategoryTotals());
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
};

export const updateFlexibleSpendingEntryAction =
  (name, amount) => (dispatch) => {
    dispatch(updateFlexibleSpendingEntry(name, amount));
    dispatch(calculateCategoryPercentages());
    dispatch(calculateCategoryTotals());
    dispatch(calculateTotalPercentage());
    dispatch(calculateRemainingAmount());
  };

export const updateSavingsEntryAction = (name, amount) => (dispatch) => {
  dispatch(updateSavingsEntry(name, amount));
  dispatch(calculateCategoryPercentages());
  dispatch(calculateCategoryTotals());
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
};

export const deleteFixedCostEntryAction = (name) => (dispatch) => {
  dispatch(deleteFixedCostEntry(name));
  dispatch(calculateCategoryPercentages());
  dispatch(calculateCategoryTotals());
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
};

export const deleteFlexibleSpendingEntryAction = (name) => (dispatch) => {
  dispatch(deleteFlexibleSpendingEntry(name));
  dispatch(calculateCategoryPercentages());
  dispatch(calculateCategoryTotals());
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
};

export const deleteSavingsEntryAction = (name) => (dispatch) => {
  dispatch(deleteSavingsEntry(name));
  dispatch(calculateCategoryPercentages());
  dispatch(calculateCategoryTotals());
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
};
