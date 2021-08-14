import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { monthlyPaymentSelector } from '../../../store/mortgage/selectors';

const MonthlyPayment = () => {
  const monthlyPayment = useSelector(monthlyPaymentSelector);

  return (
    <MonthlyPaymentAmount>
      Monthly Payment : {monthlyPayment}
    </MonthlyPaymentAmount>
  );
};

const MonthlyPaymentAmount = styled.span``;

export default MonthlyPayment;
