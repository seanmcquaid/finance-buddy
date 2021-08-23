import {
  calculateAdditionalSavingsNeededToRetire,
  calculateTotalNeededToRetire,
  calculateYearsUntilRetirement,
} from '../../utils/retirementUtils';
import {
  CALCULATE_ADDITIONAL_SAVINGS_NEEDED_TO_RETIRE,
  CALCULATE_AMOUNT_NEEDED_IN_RETIREMENT,
  CALCULATE_YEARS_UNTIL_RETIREMENT,
  SET_CURRENT_AMOUNT_IN_RETIREMENT,
  SET_MONTHLY_BUDGET,
} from './actionTypes';

const initialState = {
  monthlyBudget: 0,
  currentAmountInRetirement: 0,
  amountNeededInRetirement: 0,
  additionalSavingsNeededToRetire: 0,
  yearsUntilRetirement: 30,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MONTHLY_BUDGET:
      return { ...state, monthlyBudget: action.payload.monthlyBudget };
    case SET_CURRENT_AMOUNT_IN_RETIREMENT:
      return {
        ...state,
        currentAmountInRetirement: action.payload.currentAmountInRetirement,
      };
    case CALCULATE_AMOUNT_NEEDED_IN_RETIREMENT:
      return {
        ...state,
        amountNeededInRetirement: calculateTotalNeededToRetire(
          state.monthlyBudget,
        ),
      };
    case CALCULATE_ADDITIONAL_SAVINGS_NEEDED_TO_RETIRE:
      return {
        ...state,
        additionalSavingsNeededToRetire:
          calculateAdditionalSavingsNeededToRetire(
            state.amountNeededInRetirement,
            state.currentAmountInRetirement,
          ),
      };
    case CALCULATE_YEARS_UNTIL_RETIREMENT:
      return {
        ...state,
        yearsUntilRetirement: calculateYearsUntilRetirement(
          state.amountNeededInRetirement,
          state.monthlyBudget * 12,
        ),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
