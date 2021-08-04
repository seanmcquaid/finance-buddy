import {
  setDownPayment,
  calculateMonthlyPayment,
  setTotalMortgage,
  setInterestRate,
  setMortgageLength,
} from './actionCreators';

export const setDownPaymentAction = (downPayment) => (dispatch) => {
  dispatch(setDownPayment(downPayment));
  dispatch(calculateMonthlyPayment());
};

export const setTotalMortgageAction = (totalMortgage) => (dispatch) => {
  dispatch(setTotalMortgage(totalMortgage));
  dispatch(calculateMonthlyPayment());
};

export const setInterestRateAction = (interestRate) => (dispatch) => {
  dispatch(setInterestRate(interestRate));
  dispatch(calculateMonthlyPayment());
};

export const setMortgageLengthAction = (mortgageLength) => (dispatch) => {
  dispatch(setMortgageLength(mortgageLength));
  dispatch(calculateMonthlyPayment());
};
