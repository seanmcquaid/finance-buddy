import reducer from '../reducer';
import {
  CALCULATE_MONTHLY_PAYMENT,
  SET_DOWN_PAYMENT,
  SET_INTEREST_RATE,
  SET_MORTGAGE_LENGTH,
  SET_TOTAL_MORTGAGE,
} from '../actionTypes';

describe('mortgage reducer', () => {
  const state = {
    downPayment: 30000,
    totalMortgage: 300000,
    interestRate: 2.0,
    mortgageLength: 30,
    monthlyPayment: 0,
  };

  it('SET_INTEREST_RATE', () => {
    const result = reducer(state, {
      type: SET_INTEREST_RATE,
      payload: { interestRate: 3.0 },
    });
    expect(result.interestRate).toEqual(3.0);
  });

  it('SET_MORTGAGE_LENGTH', () => {
    const result = reducer(state, {
      type: SET_MORTGAGE_LENGTH,
      payload: { mortgageLength: 15 },
    });
    expect(result.mortgageLength).toEqual(15);
  });

  it('SET_DOWN_PAYMENT', () => {
    const result = reducer(state, {
      type: SET_DOWN_PAYMENT,
      payload: { downPayment: 3000 },
    });
    expect(result.downPayment).toEqual(3000);
  });

  it('SET_TOTAL_MORTGAGE', () => {
    const result = reducer(state, {
      type: SET_TOTAL_MORTGAGE,
      payload: { totalMortgage: 30000 },
    });
    expect(result.totalMortgage).toEqual(30000);
  });

  it('CALCULATE_MONTHLY_PAYMENT', () => {
    const result = reducer(state, {
      type: CALCULATE_MONTHLY_PAYMENT,
    });
    expect(result.monthlyPayment).toEqual(997.97);
  });
});
