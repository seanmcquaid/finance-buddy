const initialState = {
  fixedCostsPercentage: 0.5,
  fixedCosts: {},
  fixedCostsTotal: 0,
  flexibleSpendingPercentage: 0.3,
  flexibleSpending: {},
  flexibleSpendingTotal: 0,
  savings: {},
  savingsTotal: 0,
  totalBudget: 0,
  remainingAmount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
