import { useSelector } from 'react-redux';
import styled from 'styled-components';
import propTypes from 'prop-types';
import P from '../../Typography/P';

const Totals = ({ totalSelector, percentageSelector }) => {
  const total = useSelector(totalSelector);
  const percentage = useSelector(percentageSelector);

  return (
    <TotalsContainer>
      <P> Total : {total}</P>
      <P>Total Percentage : {percentage}</P>
    </TotalsContainer>
  );
};

const TotalsContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
`;

Totals.propTypes = {
  totalSelector: propTypes.func.isRequired,
  percentageSelector: propTypes.func.isRequired,
};

export default Totals;
