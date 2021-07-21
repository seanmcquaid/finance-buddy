import {
  calculateTotalForCategory,
  calculateCategoryPercentageOfBudget,
  calculateTotal,
  calculateRemainingAmount,
  calculateTotalPercentage,
} from '../budgetUtils';

describe('budgetUtils', () => {
  it('calculateCategoryPercentageOfBudget', () => {
    expect(calculateCategoryPercentageOfBudget(100, 1000)).toEqual(0.1);
  });

  it('calculateCategoryPercentageOfBudget with zero total returns 0', () => {
    expect(calculateCategoryPercentageOfBudget(100, 0)).toEqual(0);
  });

  it('calculateTotalForCategory', () => {
    expect(calculateTotalForCategory({ rent: 500, insurance: 20 })).toEqual(
      520,
    );
  });

  it('calculateTotal', () => {
    expect(calculateTotal(1000, 300, 200)).toEqual(1500);
  });

  it('calculateRemainingAmount', () => {
    expect(calculateRemainingAmount(2000, 1500)).toEqual(500);
  });

  it('calculateTotalPercentage', () => {
    expect(calculateTotalPercentage(0.1, 0.2, 0.7)).toEqual(100);
  });
});
