const initialState = {
  interestRate: 0,
  mortgageLength: 30,
  estimatedMonthlyPayment: 0,
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
