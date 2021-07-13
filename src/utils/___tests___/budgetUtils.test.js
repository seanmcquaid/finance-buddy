import {
  calculateAmountLeftInCategory,
  calculateEstimatedCategoryTotal,
  calculateTotalForCategory,
} from '../budgetUtils';

describe('budgetUtils', () => {
  it('calculateAmountLeftInCategory', () => {
    expect(calculateAmountLeftInCategory(1000, 0.5, 500)).toEqual(0);
  });

  it('calculateEstimatedCategoryTotal', () => {
    expect(calculateEstimatedCategoryTotal(1000, 0.5)).toEqual(500);
  });

  it('calculateTotalForCategory', () => {
    expect(calculateTotalForCategory({ rent: 500, insurance: 20 })).toEqual(
      520,
    );
  });
});
