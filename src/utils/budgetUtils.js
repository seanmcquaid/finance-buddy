export const calculateAmountLeftInCategory = (
  totalBudgetAmount,
  percentage,
  currentAmount,
) => totalBudgetAmount * percentage - currentAmount;

export const calculateEstimatedCategoryTotal = (
  totalBudgetAmount,
  percentage,
) => totalBudgetAmount * percentage;
