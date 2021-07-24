import { createSelector } from 'reselect';

export const budgetSelector = (state) => state.budget;

export const fixedCostsPercentageSelector = createSelector(
  budgetSelector,
  (budget) => budget.fixedCostsPercentage,
);

export const fixedCostsEntriesSelector = createSelector(
  budgetSelector,
  (budget) =>
    Object.keys(budget.fixedCosts).map((key) => ({
      name: key,
      amount: budget.fixedCosts[key],
    })),
);

export const fixedCostsEntriesAsObjectSelector = createSelector(
  budgetSelector,
  (budget) => budget.fixedCosts,
);

export const fixedCostsTotalSelector = createSelector(
  budgetSelector,
  (budget) => budget.fixedCostsTotal,
);

export const flexibleSpendingPercentageSelector = createSelector(
  budgetSelector,
  (budget) => budget.flexibleSpendingPercentage,
);

export const flexibleSpendingEntriesSelector = createSelector(
  budgetSelector,
  (budget) =>
    Object.keys(budget.flexibleSpending).map((key) => ({
      name: key,
      amount: budget.flexibleSpending[key],
    })),
);

export const flexibleSpendingEntriesAsObjectSelector = createSelector(
  budgetSelector,
  (budget) => budget.flexibleSpending,
);

export const flexibleSpendingTotalSelector = createSelector(
  budgetSelector,
  (budget) => budget.flexibleSpendingTotal,
);

export const savingsPercentageSelector = createSelector(
  budgetSelector,
  (budget) => budget.savingsPercentage,
);

export const savingsEntriesSelector = createSelector(budgetSelector, (budget) =>
  Object.keys(budget.savings).map((key) => ({
    name: key,
    amount: budget.savings[key],
  })),
);

export const savingsEntriesAsObjectSelector = createSelector(
  budgetSelector,
  (budget) => budget.savings,
);

export const savingsTotalSelector = createSelector(
  budgetSelector,
  (budget) => budget.savingsTotal,
);

export const totalBudgetSelector = createSelector(
  budgetSelector,
  (budget) => budget.totalBudget,
);

export const remainingAmountSelector = createSelector(
  budgetSelector,
  (budget) => budget.remainingAmount,
);

export const totalPercentageSelector = createSelector(
  budgetSelector,
  (budget) => budget.totalPercentage,
);
