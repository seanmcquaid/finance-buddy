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
      const totalPercentage = calculateTotalPercentage(
        state.fixedCostsPercentage,
        state.flexibleSpendingPercentage,
        state.savingsPercentage,
      );
      return {
        ...state,
        totalPercentage,
      };
    case CALCULATE_REMAINING_AMOUNT:
      const total = calculateTotal(
        calculateTotalForCategory(state.fixedCosts),
        calculateTotalForCategory(state.flexibleSpending),
        calculateTotalForCategory(state.savings),
      );
      const remainingAmount = calculateRemainingAmount(
        state.totalBudget,
        total,
      );
      return {
        ...state,
        remainingAmount,
      };
    case ADD_FIXED_COST_ENTRY:
      const updatedFixedCostsAfterAddingEntry = {
        ...state.fixedCosts,
        [action.payload.name]: 0,
      };
      const updatedSpendingAfterAddedFixedCostEntry = calculateTotal(
        updatedFixedCostsAfterAddingEntry,
        state.flexibleSpending,
        state.savings,
      );
      return {
        ...state,
        fixedCosts: {
          ...updatedFixedCostsAfterAddingEntry,
        },
        fixedCostsPercentage: calculateCategoryPercentageOfBudget(
          updatedSpendingAfterAddedFixedCostEntry,
          state.totalBudget,
        ),
        fixedCostsTotal: calculateTotalForCategory(
          updatedFixedCostsAfterAddingEntry,
        ),
      };
    case UPDATE_FIXED_COST_ENTRY:
      const updatedFixedCostsAfterUpdatingEntry = {
        ...state.fixedCosts,
        [action.payload.name]: action.payload.amount,
      };
      const updatedSpendingAfterUpdatingFixedCostEntry = calculateTotal(
        updatedFixedCostsAfterUpdatingEntry,
        state.flexibleSpending,
        state.savings,
      );
      return {
        ...state,
        fixedCosts: {
          ...updatedFixedCostsAfterUpdatingEntry,
        },
        fixedCostsPercentage: calculateCategoryPercentageOfBudget(
          updatedSpendingAfterUpdatingFixedCostEntry,
          state.totalBudget,
        ),
        fixedCostsTotal: calculateTotalForCategory(
          updatedFixedCostsAfterUpdatingEntry,
        ),
      };
    case DELETE_FIXED_COST_ENTRY:
      const updatedFixedCostsAfterDeletingEntry = { ...state.fixedCosts };
      delete updatedFixedCostsAfterDeletingEntry[action.payload.name];

      const updatedSpendingAfterDeletingFixedCostEntry = calculateTotal(
        updatedFixedCostsAfterDeletingEntry,
        state.flexibleSpending,
        state.savings,
      );
      return {
        ...state,
        fixedCosts: {
          ...updatedFixedCostsAfterDeletingEntry,
        },
        fixedCostsPercentage: calculateCategoryPercentageOfBudget(
          updatedSpendingAfterDeletingFixedCostEntry,
          state.totalBudget,
        ),
        fixedCostsTotal: calculateTotalForCategory(
          updatedFixedCostsAfterDeletingEntry,
        ),
      };
    case ADD_FLEXIBLE_SPENDING_ENTRY:
      const updatedFlexibleSpendingAfterAddingEntry = {
        ...state.flexibleSpending,
        [action.payload.name]: 0,
      };
      const updatedSpendingAfterAddedFlexibleSpendingEntry = calculateTotal(
        state.fixedCosts,
        updatedFlexibleSpendingAfterAddingEntry,
        state.savings,
      );
      return {
        ...state,
        flexibleSpending: {
          ...updatedFlexibleSpendingAfterAddingEntry,
        },
        flexibleSpendingPercentage: calculateCategoryPercentageOfBudget(
          updatedSpendingAfterAddedFlexibleSpendingEntry,
          state.totalBudget,
        ),
        flexibleSpendingTotal: calculateTotalForCategory(
          updatedFlexibleSpendingAfterAddingEntry,
        ),
      };
    case UPDATE_FLEXIBLE_SPENDING_ENTRY:
      const updatedFlexibleSpendingAfterUpdatingEntry = {
        ...state.flexibleSpending,
        [action.payload.name]: action.payload.amount,
      };
      const updatedSpendingAfterUpdatingFlexibleSpendingEntry = calculateTotal(
        state.fixedCosts,
        updatedFlexibleSpendingAfterUpdatingEntry,
        state.savings,
      );
      return {
        ...state,
        flexibleSpending: {
          ...updatedFlexibleSpendingAfterUpdatingEntry,
        },
        flexibleSpendingPercentage: calculateCategoryPercentageOfBudget(
          updatedSpendingAfterUpdatingFlexibleSpendingEntry,
          state.totalBudget,
        ),
        flexibleSpendingTotal: calculateTotalForCategory(
          updatedFlexibleSpendingAfterUpdatingEntry,
        ),
      };
    case DELETE_FLEXIBLE_SPENDING_ENTRY:
      const updatedFlexibleSpendingAfterDeletingEntry = {
        ...state.flexibleSpending,
      };
      delete updatedFlexibleSpendingAfterDeletingEntry[action.payload.name];

      const updatedSpendingAfterDeletingFlexibleSpendingEntry = calculateTotal(
        state.fixedCosts,
        updatedFlexibleSpendingAfterDeletingEntry,
        state.savings,
      );
      return {
        ...state,
        flexibleSpending: {
          ...updatedFlexibleSpendingAfterDeletingEntry,
        },
        flexibleSpendingPercentage: calculateCategoryPercentageOfBudget(
          updatedSpendingAfterDeletingFlexibleSpendingEntry,
          state.totalBudget,
        ),
        flexibleSpendingTotal: calculateTotalForCategory(
          updatedFlexibleSpendingAfterDeletingEntry,
        ),
      };
    case ADD_SAVINGS_ENTRY:
      const updatedSavingsAfterAddingEntry = {
        ...state.savings,
        [action.payload.name]: 0,
      };
      const updatedSpendingAfterAddedSavingsEntry = calculateTotal(
        state.fixedCosts,
        state.flexibleSpending,
        updatedSavingsAfterAddingEntry,
      );
      return {
        ...state,
        savings: {
          ...updatedSavingsAfterAddingEntry,
        },
        savingsPercentage: calculateCategoryPercentageOfBudget(
          updatedSpendingAfterAddedSavingsEntry,
          state.totalBudget,
        ),
        savingsTotal: calculateTotalForCategory(updatedSavingsAfterAddingEntry),
      };
    case UPDATE_SAVINGS_ENTRY:
      const updatedSavingsAfterUpdatingEntry = {
        ...state.savings,
        [action.payload.name]: action.payload.amount,
      };
      const updatedSpendingAfterUpdatingSavingsEntry = calculateTotal(
        state.fixedCosts,
        state.flexibleSpending,
        updatedSavingsAfterUpdatingEntry,
      );
      return {
        ...state,
        savings: {
          ...updatedSavingsAfterUpdatingEntry,
        },
        savingsPercentage: calculateCategoryPercentageOfBudget(
          updatedSpendingAfterUpdatingSavingsEntry,
          state.totalBudget,
        ),
        savingsTotal: calculateTotalForCategory(
          updatedSavingsAfterUpdatingEntry,
        ),
      };
    case DELETE_SAVINGS_ENTRY:
      const updatedSavingsAfterDeletingEntry = {
        ...state.Savings,
      };
      delete updatedSavingsAfterDeletingEntry[action.payload.name];

      const updatedSpendingAfterDeletingSavingsEntry = calculateTotal(
        state.fixedCosts,
        state.flexibleSpending,
        updatedSavingsAfterDeletingEntry,
      );
      return {
        ...state,
        savings: {
          ...updatedSavingsAfterDeletingEntry,
        },
        savingsPercentage: calculateCategoryPercentageOfBudget(
          updatedSpendingAfterDeletingSavingsEntry,
          state.totalBudget,
        ),
        savingsTotal: calculateTotalForCategory(
          updatedSavingsAfterDeletingEntry,
        ),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
