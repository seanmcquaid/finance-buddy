import {
  mortgageSelector,
  downPaymentSelector,
  totalMortgageSelector,
  interestRateSelector,
  mortgageLengthSelector,
  monthlyPaymentSelector,
} from '../selectors';

describe('mortgage selectors', () => {
  const state = {
    mortgage: {
      downPayment: 0,
      totalMortgage: 0,
      interestRate: 0,
      mortgageLength: 30,
      monthlyPayment: 0,
    },
  };

  it('mortgageSelector', () => {
    expect(mortgageSelector(state)).toEqual({
      downPayment: 0,
      totalMortgage: 0,
      interestRate: 0,
      mortgageLength: 30,
      monthlyPayment: 0,
    });
  });

  it('downPaymentSelector', () => {
    expect(downPaymentSelector(state)).toEqual(0);
  });

  it('totalMortgageSelector', () => {
    expect(totalMortgageSelector(state)).toEqual(0);
  });

  it('interestRateSelector', () => {
    expect(interestRateSelector(state)).toEqual(0);
  });

  it('mortgageLengthSelector', () => {
    expect(mortgageLengthSelector(state)).toEqual(30);
  });

  it('monthlyPaymentSelector', () => {
    expect(monthlyPaymentSelector(state)).toEqual(0);
  });
});
