import { setDownPayment, calculateMonthlyPayment } from './actionCreators';

export const setDownPaymentAction = (downPayment) => (dispatch) => {
  dispatch(setDownPayment(downPayment));
  dispatch(calculateMonthlyPayment());
};
