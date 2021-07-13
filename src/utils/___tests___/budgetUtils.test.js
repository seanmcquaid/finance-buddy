import { calculateAmountLeftInCategory } from '../budgetUtils';

describe('budgetUtils', () => {
  it('calculateAmountLeftInCategory', () => {
    expect(calculateAmountLeftInCategory(1000, 0.5, 500)).toEqual(0);
  });
});
