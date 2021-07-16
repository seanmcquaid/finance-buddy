import configureMockStore from '../../../testUtils/configureMockStore';
import { setTotalBudgetAction } from '../actions';

describe('budget actions', () => {
  const state = {
    budget: {
      fixedCostsPercentage: 0,
      fixedCosts: {},
      fixedCostsTotal: 0,
      flexibleSpendingPercentage: 0,
      flexibleSpending: {},
      flexibleSpendingTotal: 0,
      savingsPercentage: 0,
      savings: {},
      savingsTotal: 0,
      totalBudget: 0,
      remainingAmount: 0,
      totalPercentage: 100,
    },
  };
  const store = configureMockStore(state);

  afterEach(() => {
    store.clearActions();
  });

  it('setTotalBudgetAction', () => {
    store.dispatch(setTotalBudgetAction(1000));

    const result = [{ type: 'SET_TOTAL_BUDGET', payload: { total: 1000 } }];

    expect(result).toEqual(store.getActions());
  });

  it('addFixedCostEntryAction', () => {});

  it('addFlexibleSpendingEntryAction', () => {});

  it('addSavingsEntryAction', () => {});

  it('updateFixedCostEntryAction', () => {});

  it('updateFlexibleSpendingEntryAction', () => {});

  it('updateSavingsEntryAction', () => {});

  it('deleteFixedCostEntryAction', () => {});

  it('deleteFlexibleSpendingEntryAction', () => {});

  it('deleteSavingsEntryAction', () => {});
});
