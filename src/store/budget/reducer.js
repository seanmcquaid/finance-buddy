/* eslint-disable no-case-declarations */
import {
  ADD_FIXED_COST_ENTRY,
  ADD_FLEXIBLE_SPENDING_ENTRY,
  ADD_SAVINGS_ENTRY,
  REMOVE_FIXED_COST_ENTRY,
  REMOVE_FLEXIBLE_SPENDING_ENTRY,
  REMOVE_SAVINGS_ENTRY,
  SET_TOTAL_BUDGET,
  UPDATE_FIXED_COST_ENTRY,
  UPDATE_FLEXIBLE_SPENDING_ENTRY,
  UPDATE_SAVINGS_ENTRY,
} from './actionTypes';

const initialState = {
  fixedCostsPercentage: 0.5,
  fixedCosts: {},
  fixedCostsTotal: 0,
  flexibleSpendingPercentage: 0.3,
  flexibleSpending: {},
  flexibleSpendingTotal: 0,
  savingsPercentage: 0.2,
  savings: {},
  savingsTotal: 0,
  totalBudget: 0,
  totalPercentage: 100,
  remainingAmount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL_BUDGET:
      return {
        ...state,
        total: action.payload.total,
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
    case REMOVE_FIXED_COST_ENTRY:
      const fixedCosts = { ...state.fixedCosts };
      delete fixedCosts[action.payload.name];
      return {
        ...state,
        fixedCosts,
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
    case REMOVE_FLEXIBLE_SPENDING_ENTRY:
      const flexibleSpending = { ...state.flexibleSpending };
      delete flexibleSpending[action.payload.name];
      return {
        ...state,
        flexibleSpending,
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
    case REMOVE_SAVINGS_ENTRY:
      const savings = { ...state.savings };
      delete savings[action.payload.name];
      return {
        ...state,
        savings,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
