import { useSelector } from 'react-redux';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Totals = ({ totalSelector, percentageSelector }) => {
  const total = useSelector(totalSelector);
  const percentage = useSelector(percentageSelector);

  return (
    <TotalsContainer>
      <Total> Total : {total}</Total>
      <Percentage>Total Percentage : {percentage}</Percentage>
    </TotalsContainer>
  );
};

const TotalsContainer = styled.div``;

const Total = styled.span``;

const Percentage = styled.span``;

Totals.propTypes = {
  totalSelector: propTypes.func.isRequired,
  percentageSelector: propTypes.func.isRequired,
};

export default Totals;
