import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  flexibleSpendingPercentageSelector,
  flexibleSpendingTotalSelector,
} from '../../../store/budget/selectors';

const FlexibleSpendingTotals = () => {
  const flexibleSpendingTotal = useSelector(flexibleSpendingTotalSelector);
  const flexibleSpendingPercentage = useSelector(
    flexibleSpendingPercentageSelector,
  );

  return (
    <FlexibleSpendingTotalsContainer>
      <FlexibleSpendingTotal>
        Flexible Spending Total : {flexibleSpendingTotal}
      </FlexibleSpendingTotal>
      <FlexibleSpendingPercentage>
        Flexible Spending Percentage : {flexibleSpendingPercentage}
      </FlexibleSpendingPercentage>
    </FlexibleSpendingTotalsContainer>
  );
};

const FlexibleSpendingTotalsContainer = styled.div``;

const FlexibleSpendingTotal = styled.span``;

const FlexibleSpendingPercentage = styled.span``;

export default FlexibleSpendingTotals;
