import {
  CALCULATE_MONTHLY_PAYMENT,
  SET_DOWN_PAYMENT,
  SET_INTEREST_RATE,
  SET_MORTGAGE_LENGTH,
  SET_TOTAL_MORTGAGE,
} from './actionTypes';

export const setInterestRate = (interestRate) => ({
  type: SET_INTEREST_RATE,
  payload: { interestRate },
});

export const setDownPayment = (downPayment) => ({
  type: SET_DOWN_PAYMENT,
  payload: { downPayment },
});

export const setTotalMortgage = (totalMortgage) => ({
  type: SET_TOTAL_MORTGAGE,
  payload: { totalMortgage },
});

export const setMortgageLength = (mortgageLength) => ({
  type: SET_MORTGAGE_LENGTH,
  payload: { mortgageLength },
});

export const calculateMonthlyPayment = () => ({
  type: CALCULATE_MONTHLY_PAYMENT,
});
