import { fixedCostsSelector } from '../selectors';

describe('budget selectors', () => {
  it('fixedCostsSelector', () => {
    const initialState = {
      budget: {
        fixedCostsPercentage: 0,
        fixedCosts: {
          rent: 800,
        },
        fixedCostsTotal: 0,
        flexibleSpendingPercentage: 0,
        flexibleSpending: {},
        flexibleSpendingTotal: 0,
        savingsPercentage: 0,
        savings: {},
        savingsTotal: 0,
        totalBudget: 0,
        remainingAmount: 0,
        totalPercentage: 100,
      },
    };
    expect(fixedCostsSelector(initialState)).toEqual([{ rent: 800 }]);
  });
});
