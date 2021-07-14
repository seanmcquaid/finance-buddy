import {
  budgetSelector,
  fixedCostsPercentageSelector,
  fixedCostsSelector,
} from '../selectors';

describe('budget selectors', () => {
  const state = {
    budget: {
      fixedCostsPercentage: 0,
      fixedCosts: {
        rent: 800,
      },
      fixedCostsTotal: 0,
      flexibleSpendingPercentage: 0,
      flexibleSpending: {
        cards: 200,
      },
      flexibleSpendingTotal: 0,
      savingsPercentage: 0,
      savings: {
        chase: 2000,
      },
      savingsTotal: 0,
      totalBudget: 0,
      remainingAmount: 0,
      totalPercentage: 100,
    },
  };
  it('budgetSelector', () => {
    expect(budgetSelector(state)).toEqual({
      fixedCostsPercentage: 0,
      fixedCosts: {
        rent: 800,
      },
      fixedCostsTotal: 0,
      flexibleSpendingPercentage: 0,
      flexibleSpending: {
        cards: 200,
      },
      flexibleSpendingTotal: 0,
      savingsPercentage: 0,
      savings: {
        chase: 2000,
      },
      savingsTotal: 0,
      totalBudget: 0,
      remainingAmount: 0,
      totalPercentage: 100,
    });
  });

  it('fixedCostsPercentageSelector', () => {
    expect(fixedCostsPercentageSelector(state)).toEqual(0);
  });

  it('fixedCostsSelector', () => {
    expect(fixedCostsSelector(state)).toEqual([{ rent: 800 }]);
  });

  it('fixedCostsTotalSelector', () => {});

  it('flexibleSpendingPercentageSelector', () => {});

  it('flexibleSpendingSelector', () => {});

  it('flexibleSpendingTotalSelector', () => {});

  it('savingsPercentageSelector', () => {});

  it('savingsSelector', () => {});

  it('savingsTotalSelector', () => {});

  it('totalBudgetSelector', () => {});

  it('remainingAmountSelector', () => {});

  it('totalPercentageSelector', () => {});
});
