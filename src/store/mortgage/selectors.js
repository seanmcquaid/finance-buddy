import { createSelector } from 'reselect';

export const mortgageSelector = (state) => state.mortgage;

export const downPaymentSelector = createSelector(
  mortgageSelector,
  (mortgage) => mortgage.downPayment,
);

export const totalMortgageSelector = createSelector(
  mortgageSelector,
  (mortgage) => mortgage.totalMortgage,
);

export const interestRateSelector = createSelector(
  mortgageSelector,
  (mortgage) => mortgage.interestRate,
);

export const mortgageLengthSelector = createSelector(
  mortgageSelector,
  (mortgage) => mortgage.mortgageLength,
);

export const monthlyPaymentSelector = createSelector(
  mortgageSelector,
  (mortgage) => mortgage.monthlyPayment,
);
