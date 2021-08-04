import {
  CALCULATE_MONTHLY_PAYMENT,
  SET_INTEREST_RATE,
  SET_MORTGAGE_LENGTH,
} from './actionTypes';

export const setInterestRate = (interestRate) => ({
  type: SET_INTEREST_RATE,
  payload: { interestRate },
});

export const setDownPayment = (downPayment) => ({
  type: SET_INTEREST_RATE,
  payload: { downPayment },
});

export const setTotalMortgage = (totalMortgage) => ({
  type: SET_INTEREST_RATE,
  payload: { totalMortgage },
});

export const setMortgageLength = (mortgageLength) => ({
  type: SET_MORTGAGE_LENGTH,
  payload: { mortgageLength },
});

export const calculateMonthlyPayment = () => ({
  type: CALCULATE_MONTHLY_PAYMENT,
});
