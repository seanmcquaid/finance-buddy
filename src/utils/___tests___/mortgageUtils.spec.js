import { calculateMonthlyPayment } from '../mortgageUtils';

describe('mortgageUtils', () => {
  it('calculateMonthlyPayment', () => {
    expect(calculateMonthlyPayment(300000, 60000, 2.5, 30)).toEqual(948.29);
  });

  it('calculateMonthlyPayment with no values returns 0', () => {
    expect(calculateMonthlyPayment()).toEqual(0);
  });
});
