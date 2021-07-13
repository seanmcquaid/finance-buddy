export const calculateAmountLeftInCategory = (
  totalBudgetAmount,
  percentage,
  currentAmount,
) => totalBudgetAmount * percentage - currentAmount;

export const calculateEstimatedCategoryTotal = (
  totalBudgetAmount,
  percentage,
) => totalBudgetAmount * percentage;

export const calculateTotalForCategory = (categoryEntries = {}) =>
  Object.values(categoryEntries).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
