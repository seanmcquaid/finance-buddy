export const calculateCategoryPercentageOfBudget = (categoryTotal, total) =>
  total === 0 ? 0 : categoryTotal / total;

export const calculateTotalForCategory = (categoryEntries = {}) =>
  Object.keys(categoryEntries)
    .map((key) => categoryEntries[key])
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
