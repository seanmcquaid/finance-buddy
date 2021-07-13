import {
  calculateTotalForCategory,
  calculateCategoryPercentageOfBudget,
  calculateTotal,
  calculateAmountLeft,
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

  it('calculateAmountLeft', () => {
    expect(calculateAmountLeft(2000, 1500)).toEqual(500);
  });
});
