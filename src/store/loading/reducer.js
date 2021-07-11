import { LOADING } from './actionTypes';

const initialState = {
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
        ...initialState,
      };
  }
};

export default reducer;
