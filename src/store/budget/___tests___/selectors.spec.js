import {
  budgetSelector,
  fixedCostsPercentageSelector,
  fixedCostsEntriesSelector,
  fixedCostsTotalSelector,
  flexibleSpendingPercentageSelector,
  flexibleSpendingSelector,
  flexibleSpendingTotalSelector,
  remainingAmountSelector,
  savingsPercentageSelector,
  savingsSelector,
  savingsTotalSelector,
  totalBudgetSelector,
  totalPercentageSelector,
  fixedCostsEntriesAsObjectSelector,
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

  it('fixedCostsEntriesSelector', () => {
    expect(fixedCostsEntriesSelector(state)).toEqual([
      { name: 'rent', amount: 800 },
    ]);
  });

  it('fixedCostsEntriesAsObjectSelector', () => {
    expect(fixedCostsEntriesAsObjectSelector(state)).toEqual({ rent: 800 });
  });

  it('fixedCostsTotalSelector', () => {
    expect(fixedCostsTotalSelector(state)).toEqual(0);
  });

  it('flexibleSpendingPercentageSelector', () => {
    expect(flexibleSpendingPercentageSelector(state)).toEqual(0);
  });

  it('flexibleSpendingSelector', () => {
    expect(flexibleSpendingSelector(state)).toEqual([
      { name: 'cards', amount: 200 },
    ]);
  });

  it('flexibleSpendingTotalSelector', () => {
    expect(flexibleSpendingTotalSelector(state)).toEqual(0);
  });

  it('savingsPercentageSelector', () => {
    expect(savingsPercentageSelector(state)).toEqual(0);
  });

  it('savingsSelector', () => {
    expect(savingsSelector(state)).toEqual([{ name: 'chase', amount: 2000 }]);
  });

  it('savingsTotalSelector', () => {
    expect(savingsTotalSelector(state)).toEqual(0);
  });

  it('totalBudgetSelector', () => {
    expect(totalBudgetSelector(state)).toEqual(0);
  });

  it('remainingAmountSelector', () => {
    expect(remainingAmountSelector(state)).toEqual(0);
  });

  it('totalPercentageSelector', () => {
    expect(totalPercentageSelector(state)).toEqual(100);
  });
});
