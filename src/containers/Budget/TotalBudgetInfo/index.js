import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { P } from '../../../components';
import {
  remainingAmountSelector,
  totalBudgetSelector,
  totalPercentageSelector,
} from '../../../store/budget/selectors';

const TotalBudgetInfo = () => {
  const totalBudget = useSelector(totalBudgetSelector);
  const remainingAmount = useSelector(remainingAmountSelector);
  const totalPercentage = useSelector(totalPercentageSelector);

  return (
    <TotalBudgetInfoContainer>
      <P>Total Budget : {totalBudget}</P>
      <P>Remaining Amount : {remainingAmount}</P>
      <P>Percentage Accounted For : {totalPercentage}%</P>
    </TotalBudgetInfoContainer>
  );
};

const TotalBudgetInfoContainer = styled.div``;

export default TotalBudgetInfo;
