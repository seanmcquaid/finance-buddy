/* eslint-disable no-case-declarations */
import {
  calculateCategoryPercentageOfBudget,
  calculateRemainingAmount,
  calculateTotal,
  calculateTotalForCategory,
  calculateTotalPercentage,
} from '../../utils/budgetUtils';
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

const initialState = {
  fixedCostsPercentage: 0,
  fixedCosts: {},
  fixedCostsTotal: 0,
  flexibleSpendingPercentage: 0,
  flexibleSpending: {},
  flexibleSpendingTotal: 0,
  savingsPercentage: 0,
  savings: {},
  savingsTotal: 0,
  totalBudget: 0,
  remainingAmount: 0,
  totalPercentage: 100,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL_BUDGET:
      return {
        ...state,
        totalBudget: action.payload.total,
      };
    case CALCULATE_TOTAL_PERCENTAGE:
      return {
        ...state,
        totalPercentage: calculateTotalPercentage(
          state.fixedCostsPercentage,
          state.flexibleSpendingPercentage,
          state.savingsPercentage,
        ),
      };
    case CALCULATE_REMAINING_AMOUNT:
      const total = calculateTotal(
        calculateTotalForCategory(state.fixedCosts),
        calculateTotalForCategory(state.flexibleSpending),
        calculateTotalForCategory(state.savings),
      );
      return {
        ...state,
        remainingAmount: calculateRemainingAmount(state.totalBudget, total),
      };
    case CALCULATE_CATEGORY_PERCENTAGES:
      return {
        ...state,
        fixedCostsPercentage: calculateCategoryPercentageOfBudget(
          calculateTotalForCategory(state.fixedCosts),
          state.totalBudget,
        ),
        flexibleSpendingPercentage: calculateCategoryPercentageOfBudget(
          calculateTotalForCategory(state.flexibleSpending),
          state.totalBudget,
        ),
        savingsPercentage: calculateCategoryPercentageOfBudget(
          calculateTotalForCategory(state.savings),
          state.totalBudget,
        ),
      };
    case CALCULATE_CATEGORY_TOTALS:
      return {
        ...state,
        fixedCostsTotal: calculateTotalForCategory(state.fixedCosts),
        flexibleSpendingTotal: calculateTotalForCategory(
          state.flexibleSpending,
        ),
        savingsTotal: calculateTotalForCategory(state.savings),
      };
    case ADD_FIXED_COST_ENTRY:
      return {
        ...state,
        fixedCosts: {
          ...state.fixedCosts,
          [action.payload.name]: 0,
        },
      };
    case UPDATE_FIXED_COST_ENTRY:
      return {
        ...state,
        fixedCosts: {
          ...state.fixedCosts,
          [action.payload.name]: action.payload.amount,
        },
      };
    case DELETE_FIXED_COST_ENTRY:
      const updatedFixedCostsAfterDeletingEntry = { ...state.fixedCosts };
      delete updatedFixedCostsAfterDeletingEntry[action.payload.name];
      return {
        ...state,
        fixedCosts: {
          ...updatedFixedCostsAfterDeletingEntry,
        },
      };
    case ADD_FLEXIBLE_SPENDING_ENTRY:
      return {
        ...state,
        flexibleSpending: {
          ...state.flexibleSpending,
          [action.payload.name]: 0,
        },
      };
    case UPDATE_FLEXIBLE_SPENDING_ENTRY:
      return {
        ...state,
        flexibleSpending: {
          ...state.flexibleSpending,
          [action.payload.name]: action.payload.amount,
        },
      };
    case DELETE_FLEXIBLE_SPENDING_ENTRY:
      const updatedFlexibleSpendingAfterDeletingEntry = {
        ...state.flexibleSpending,
      };
      delete updatedFlexibleSpendingAfterDeletingEntry[action.payload.name];

      return {
        ...state,
        flexibleSpending: {
          ...updatedFlexibleSpendingAfterDeletingEntry,
        },
      };
    case ADD_SAVINGS_ENTRY:
      return {
        ...state,
        savings: {
          ...state.savings,
          [action.payload.name]: 0,
        },
      };
    case UPDATE_SAVINGS_ENTRY:
      return {
        ...state,
        savings: {
          ...state.savings,
          [action.payload.name]: action.payload.amount,
        },
      };
    case DELETE_SAVINGS_ENTRY:
      const updatedSavingsAfterDeletingEntry = {
        ...state.Savings,
      };
      delete updatedSavingsAfterDeletingEntry[action.payload.name];

      return {
        ...state,
        savings: {
          ...updatedSavingsAfterDeletingEntry,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
