export const calculateCategoryPercentageOfBudget = (categoryTotal, total) =>
  categoryTotal / total;

export const calculateTotalForCategory = (categoryEntries = {}) =>
  categoryEntries
    .map((entry) => entry.amount)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

export const calculateTotal = (fixed, flexible, savings) =>
  fixed + flexible + savings;

export const calculateRemainingAmount = (totalBudget, totalSpending) =>
  totalBudget - totalSpending;

export const calculateTotalPercentage = (
  fixedPercentage,
  flexiblePercentage,
  savingsPercentage,
) => (fixedPercentage + flexiblePercentage + savingsPercentage) * 100;
