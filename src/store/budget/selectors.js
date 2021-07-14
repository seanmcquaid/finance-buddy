import { createSelector } from 'reselect';

export const budgetSelector = createSelector((state) => state.budget);

export const fixedCostsPercentageSelector = createSelector(
  budgetSelector,
  (budget) => budget.fixedCostsPercentage,
);

export const fixedCostsSelector = createSelector(
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

export const flexibleSpendingSelector = createSelector(
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

export const savingsSelector = createSelector(
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
