import { calculateMonthlyPayment } from '../../utils/mortgageUtils';
import {
  SET_DOWN_PAYMENT,
  SET_INTEREST_RATE,
  SET_MORTGAGE_LENGTH,
  SET_TOTAL_MORTGAGE,
  CALCULATE_MONTHLY_PAYMENT,
} from './actionTypes';

const initialState = {
  downPayment: 0,
  totalMortgage: 0,
  interestRate: 0,
  mortgageLength: 30,
  monthlyPayment: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INTEREST_RATE:
      return {
        ...state,
        interestRate: action.payload.interestRate,
      };
    case SET_MORTGAGE_LENGTH:
      return {
        ...state,
        mortgageLength: action.payload.mortgageLength,
      };
    case SET_DOWN_PAYMENT:
      return {
        ...state,
        downPayment: action.payload.downPayment,
      };
    case SET_TOTAL_MORTGAGE:
      return {
        ...state,
        totalMortgage: action.payload.totalMortgage,
      };
    case CALCULATE_MONTHLY_PAYMENT:
      return {
        ...state,
        monthlyPayment: calculateMonthlyPayment(
          state.totalMortgage,
          state.downPayment,
          state.interestRate,
          state.mortgageLength,
        ),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
