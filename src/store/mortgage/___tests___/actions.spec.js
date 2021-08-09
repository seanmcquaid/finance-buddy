import configureMockStore from '../../../testUtils/configureMockStore';
import {
  setDownPaymentAction,
  setInterestRateAction,
  setMortgageLengthAction,
  setTotalMortgageAction,
} from '../actions';

describe('mortgage actions', () => {
  const state = {
    mortgage: {
      downPayment: 0,
      totalMortgage: 0,
      interestRate: 0,
      mortgageLength: 30,
      monthlyPayment: 0,
    },
  };
  const store = configureMockStore(state);

  afterEach(() => {
    store.clearActions();
  });

  it('setDownPaymentAction', () => {
    store.dispatch(setDownPaymentAction(3000));

    const result = [
      { type: 'SET_DOWN_PAYMENT', payload: { downPayment: 3000 } },
      { type: 'CALCULATE_MONTHLY_PAYMENT' },
    ];

    expect(result).toEqual(store.getActions());
  });

  it('setTotalMortgageAction', () => {
    store.dispatch(setTotalMortgageAction(30000));

    const result = [
      { type: 'SET_TOTAL_MORTGAGE', payload: { totalMortgage: 30000 } },
      { type: 'CALCULATE_MONTHLY_PAYMENT' },
    ];

    expect(result).toEqual(store.getActions());
  });

  it('setInterestRateAction', () => {
    store.dispatch(setInterestRateAction(3.0));

    const result = [
      { type: 'SET_INTEREST_RATE', payload: { interestRate: 3 } },
      { type: 'CALCULATE_MONTHLY_PAYMENT' },
    ];

    expect(result).toEqual(store.getActions());
  });

  it('setMortgageLengthAction', () => {
    store.dispatch(setMortgageLengthAction(15));

    const result = [
      { type: 'SET_MORTGAGE_LENGTH', payload: { mortgageLength: 15 } },
      { type: 'CALCULATE_MONTHLY_PAYMENT' },
    ];

    expect(result).toEqual(store.getActions());
  });
});
