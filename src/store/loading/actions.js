import { loading } from './actionCreators';

export const loadingAction = () => (dispatch) => {
  dispatch(loading());
};
