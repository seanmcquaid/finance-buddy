const initialState = {
  downPayment: 0,
  totalMortgage: 0,
  interestRate: 0,
  mortgageLength: 30,
  monthlyPayment: 0,
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
