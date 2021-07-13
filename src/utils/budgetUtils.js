export const calculateAmountLeftInCategory = (
  totalBudgetAmount,
  percentage,
  currentAmount,
) => totalBudgetAmount * percentage - currentAmount;
