const initialState = {
  monthlyBudget: 0,
  currentAmountInRetirement: 0,
  amountNeededInRetirement: 0,
  yearsUntilRetirement: 30,
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
