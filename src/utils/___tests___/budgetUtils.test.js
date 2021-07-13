import {
  calculateAmountLeftInCategory,
  calculateEstimatedCategoryTotal,
} from '../budgetUtils';

describe('budgetUtils', () => {
  it('calculateAmountLeftInCategory', () => {
    expect(calculateAmountLeftInCategory(1000, 0.5, 500)).toEqual(0);
  });

  it('calculateEstimatedCategoryTotal', () => {
    expect(calculateEstimatedCategoryTotal(1000, 0.5)).toEqual(500);
  });
});
