import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  savingsPercentageSelector,
  savingsTotalSelector,
} from '../../../store/budget/selectors';

const SavingsTotals = () => {
  const savingsTotal = useSelector(savingsTotalSelector);
  const savingsPercentage = useSelector(savingsPercentageSelector);

  return (
    <SavingsTotalsContainer>
      <SavingsTotal>Savings Total : {savingsTotal}</SavingsTotal>
      <SavingsPercentage>
        Savings Percentage : {savingsPercentage}
      </SavingsPercentage>
    </SavingsTotalsContainer>
  );
};

const SavingsTotalsContainer = styled.div``;

const SavingsTotal = styled.span``;

const SavingsPercentage = styled.span``;

export default SavingsTotals;
