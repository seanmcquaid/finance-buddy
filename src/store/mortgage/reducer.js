import {
  SET_DOWN_PAYMENT,
  SET_INTEREST_RATE,
  SET_MORTGAGE_LENGTH,
  SET_TOTAL_MORTGAGE,
} from './actionTypes';

const initialState = {
  downPayment: 0,
  totalMortgage: 0,
  interestRate: 0,
  mortgageLength: 30,
  monthlyPayment: 0,
};

// todo - calculate monthly payment set up and selectors

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
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
