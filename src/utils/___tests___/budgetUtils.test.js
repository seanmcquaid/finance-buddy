import {
  calculateTotalForCategory,
  calculateCategoryPercentageOfBudget,
  calculateTotal,
  calculateRemainingAmount,
} from '../budgetUtils';

describe('budgetUtils', () => {
  it('calculateCategoryPercentageOfBudget', () => {
    expect(calculateCategoryPercentageOfBudget(100, 1000)).toEqual(0.1);
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
});
