export const calculateCategoryPercentageOfBudget = (categoryTotal, total) =>
  categoryTotal / total;

export const calculateTotalForCategory = (categoryEntries = {}) =>
  Object.values(categoryEntries).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );

export const calculateTotal = (fixed, flexible, savings) =>
  fixed + flexible + savings;

export const calculateAmountLeft = (totalBudget, totalSpending) =>
  totalBudget - totalSpending;
