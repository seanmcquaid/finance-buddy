import {
  calculateAdditionalSavingsNeededToRetire,
  calculateAmountNeededInRetirement,
  calculateYearsUntilRetirement,
  setCurrentAmountInRetirement,
  setMonthlyBudget,
} from './actionCreators';

export const setMonthlyBudgetAction = (monthlyBudget) => (dispatch) => {
  dispatch(setMonthlyBudget(monthlyBudget));
  dispatch(calculateAmountNeededInRetirement());
  dispatch(calculateAdditionalSavingsNeededToRetire());
  dispatch(calculateYearsUntilRetirement());
};

export const setCurrentAmountInRetirementAction =
  (currentAmountInRetirement) => (dispatch) => {
    dispatch(setCurrentAmountInRetirement(currentAmountInRetirement));
    dispatch(calculateAmountNeededInRetirement());
    dispatch(calculateAdditionalSavingsNeededToRetire());
    dispatch(calculateYearsUntilRetirement());
  };
