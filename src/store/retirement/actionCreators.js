import {
  CALCULATE_ADDITIONAL_SAVINGS_NEEDED_TO_RETIRE,
  CALCULATE_AMOUNT_NEEDED_IN_RETIREMENT,
  CALCULATE_YEARS_UNTIL_RETIREMENT,
  SET_CURRENT_AMOUNT_IN_RETIREMENT,
  SET_MONTHLY_BUDGET,
} from './actionTypes';

export const setMonthlyBudget = (monthlyBudget) => ({
  type: SET_MONTHLY_BUDGET,
  payload: { monthlyBudget },
});

export const setCurrentAmountInRetirement = (currentAmountInRetirement) => ({
  type: SET_CURRENT_AMOUNT_IN_RETIREMENT,
  payload: { currentAmountInRetirement },
});

export const calculateAmountNeededInRetirement = () => ({
  type: CALCULATE_AMOUNT_NEEDED_IN_RETIREMENT,
});

export const calculateAdditionalSavingsNeededToRetire = () => ({
  type: CALCULATE_ADDITIONAL_SAVINGS_NEEDED_TO_RETIRE,
});

export const calculateYearsUntilRetirement = () => ({
  type: CALCULATE_YEARS_UNTIL_RETIREMENT,
});
