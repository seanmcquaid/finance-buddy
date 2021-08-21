export const calculateTotalNeededToRetire = (monthlyBudget = 0) =>
  monthlyBudget * 12 * 25;

export const calculateAdditionalSavingsNeededToRetire = (
  total,
  currentRetirementSavings,
) => total - currentRetirementSavings;

export const calculateYearsUntilRetirement = (total, yearlyRetirementSavings) =>
  Math.ceil(total / yearlyRetirementSavings);
