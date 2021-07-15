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
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
  dispatch(calculateCategoryPercentages());
  dispatch(calculateCategoryTotals());
};

export const addFlexibleSpendingEntryAction = (name) => (dispatch) => {
  dispatch(addFlexibleSpendingEntry(name));
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
  dispatch(calculateCategoryPercentages());
  dispatch(calculateCategoryTotals());
};

export const addSavingsEntryAction = (name) => (dispatch) => {
  dispatch(addSavingsEntry(name));
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
  dispatch(calculateCategoryPercentages());
  dispatch(calculateCategoryTotals());
};

export const updateFixedCostEntryAction = (name, amount) => (dispatch) => {
  dispatch(updateFixedCostEntry(name, amount));
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
  dispatch(calculateCategoryPercentages());
  dispatch(calculateCategoryTotals());
};

export const updateFlexibleSpendingEntryAction =
  (name, amount) => (dispatch) => {
    dispatch(updateFlexibleSpendingEntry(name, amount));
    dispatch(calculateTotalPercentage());
    dispatch(calculateRemainingAmount());
    dispatch(calculateCategoryPercentages());
    dispatch(calculateCategoryTotals());
  };

export const updateSavingsEntryAction = (name, amount) => (dispatch) => {
  dispatch(updateSavingsEntry(name, amount));
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
  dispatch(calculateCategoryPercentages());
  dispatch(calculateCategoryTotals());
};

export const deleteFixedCostEntryAction = (name) => (dispatch) => {
  dispatch(deleteFixedCostEntry(name));
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
  dispatch(calculateCategoryPercentages());
  dispatch(calculateCategoryTotals());
};

export const deleteFlexibleSpendingEntryAction = (name) => (dispatch) => {
  dispatch(deleteFlexibleSpendingEntry(name));
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
  dispatch(calculateCategoryPercentages());
  dispatch(calculateCategoryTotals());
};

export const deleteSavingsEntryAction = (name) => (dispatch) => {
  dispatch(deleteSavingsEntry(name));
  dispatch(calculateTotalPercentage());
  dispatch(calculateRemainingAmount());
  dispatch(calculateCategoryPercentages());
  dispatch(calculateCategoryTotals());
};
