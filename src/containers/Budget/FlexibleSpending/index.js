import styled from 'styled-components';
import AddFlexibleSpendingForm from './AddFlexibleSpendingForm';
import FlexibleSpendingEntries from './FlexibleSpendingEntries';
import FlexibleSpendingTotals from './FlexibleSpendingTotals';

const FlexibleSpending = () => (
  <FlexibleSpendingContainer>
    <FlexibleSpendingTotals />
    <FlexibleSpendingEntries />
    <AddFlexibleSpendingForm />
  </FlexibleSpendingContainer>
);

const FlexibleSpendingContainer = styled.div``;

export default FlexibleSpending;
