import { createSelector } from 'reselect';

export const retirementSelector = (state) => state.retirement;

export const monthlyBudgetSelector = createSelector(
  retirementSelector,
  (retirement) => retirement.monthlyBudget,
);

export const currentAmountInRetirementSelector = createSelector(
  retirementSelector,
  (retirement) => retirement.currentAmountInRetirement,
);

export const amountNeededInRetirementSelector = createSelector(
  retirementSelector,
  (retirement) => retirement.amountNeededInRetirement,
);

export const additionalSavingsNeededToRetireSelector = createSelector(
  retirementSelector,
  (retirement) => retirement.additionalSavingsNeededToRetire,
);

export const yearsUntilRetirementSelector = createSelector(
  retirementSelector,
  (retirement) => retirement.additionalSavingsNeededToRetir,
);
