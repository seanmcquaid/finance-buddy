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
  REMOVE_FIXED_COST_ENTRY,
  REMOVE_FLEXIBLE_SPENDING_ENTRY,
  REMOVE_SAVINGS_ENTRY,
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
        total: action.payload.total,
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
        state.fixedCosts,
        state.flexibleSpending,
        state.savings,
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
    case REMOVE_FIXED_COST_ENTRY:
      const updatedFixedCostsAfterRemovingEntry = { ...state.fixedCosts };
      delete updatedFixedCostsAfterRemovingEntry[action.payload.name];

      const updatedSpendingAfterRemovingFixedCostEntry = calculateTotal(
        updatedFixedCostsAfterRemovingEntry,
        state.flexibleSpending,
        state.savings,
      );
      return {
        ...state,
        fixedCosts: {
          ...updatedFixedCostsAfterRemovingEntry,
        },
        fixedCostsPercentage: calculateCategoryPercentageOfBudget(
          updatedSpendingAfterRemovingFixedCostEntry,
          state.totalBudget,
        ),
        fixedCostsTotal: calculateTotalForCategory(
          updatedFixedCostsAfterRemovingEntry,
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
    case REMOVE_FLEXIBLE_SPENDING_ENTRY:
      const updatedFlexibleSpendingAfterRemovingEntry = {
        ...state.flexibleSpending,
      };
      delete updatedFlexibleSpendingAfterRemovingEntry[action.payload.name];

      const updatedSpendingAfterRemovingFlexibleSpendingEntry = calculateTotal(
        state.fixedCosts,
        updatedFlexibleSpendingAfterRemovingEntry,
        state.savings,
      );
      return {
        ...state,
        flexibleSpending: {
          ...updatedFlexibleSpendingAfterRemovingEntry,
        },
        flexibleSpendingPercentage: calculateCategoryPercentageOfBudget(
          updatedSpendingAfterRemovingFlexibleSpendingEntry,
          state.totalBudget,
        ),
        flexibleSpendingTotal: calculateTotalForCategory(
          updatedFlexibleSpendingAfterRemovingEntry,
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
    case REMOVE_SAVINGS_ENTRY:
      const updatedSavingsAfterRemovingEntry = {
        ...state.Savings,
      };
      delete updatedSavingsAfterRemovingEntry[action.payload.name];

      const updatedSpendingAfterRemovingSavingsEntry = calculateTotal(
        state.fixedCosts,
        state.flexibleSpending,
        updatedSavingsAfterRemovingEntry,
      );
      return {
        ...state,
        savings: {
          ...updatedSavingsAfterRemovingEntry,
        },
        savingsPercentage: calculateCategoryPercentageOfBudget(
          updatedSpendingAfterRemovingSavingsEntry,
          state.totalBudget,
        ),
        savingsTotal: calculateTotalForCategory(
          updatedSavingsAfterRemovingEntry,
        ),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
