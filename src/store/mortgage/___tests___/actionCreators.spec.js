import {
  setInterestRate,
  setDownPayment,
  setTotalMortgage,
  setMortgageLength,
  calculateMonthlyPayment,
} from '../actionCreators';
import {
  CALCULATE_MONTHLY_PAYMENT,
  SET_DOWN_PAYMENT,
  SET_INTEREST_RATE,
  SET_MORTGAGE_LENGTH,
  SET_TOTAL_MORTGAGE,
} from '../actionTypes';

describe('mortgage actionCreators', () => {
  it('setInterestRate', () => {
    expect(setInterestRate(1.2)).toEqual({
      type: SET_INTEREST_RATE,
      payload: { interestRate: 1.2 },
    });
  });

  it('setDownPayment', () => {
    expect(setDownPayment(10002)).toEqual({
      type: SET_DOWN_PAYMENT,
      payload: { downPayment: 10002 },
    });
  });

  it('setTotalMortgage', () => {
    expect(setTotalMortgage(10002)).toEqual({
      type: SET_TOTAL_MORTGAGE,
      payload: { totalMortgage: 10002 },
    });
  });

  it('setMortgageLength', () => {
    expect(setMortgageLength(10)).toEqual({
      type: SET_MORTGAGE_LENGTH,
      payload: { mortgageLength: 10 },
    });
  });

  it('calculateMonthlyPayment', () => {
    expect(calculateMonthlyPayment()).toEqual({
      type: CALCULATE_MONTHLY_PAYMENT,
    });
  });
});
