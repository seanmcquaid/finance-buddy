import styled from 'styled-components';
import Totals from '../../../components/Budget/Totals';
import Entries from '../../../components/Budget/Entries';
import AddEntryForm from '../../../components/Budget/AddEntryForm';
import {
  flexibleSpendingEntriesAsObjectSelector,
  flexibleSpendingEntriesSelector,
  flexibleSpendingPercentageSelector,
  flexibleSpendingTotalSelector,
} from '../../../store/budget/selectors';
import {
  addFlexibleSpendingEntryAction,
  deleteFlexibleSpendingEntryAction,
  updateFlexibleSpendingEntryAction,
} from '../../../store/budget/actions';
import { H4 } from '../../../components';

const FlexibleSpending = () => (
  <FlexibleSpendingContainer>
    <H4>Flexible Spending</H4>
    <Totals
      totalSelector={flexibleSpendingTotalSelector}
      percentageSelector={flexibleSpendingPercentageSelector}
    />
    <AddEntryForm
      keyName="flexibleSpendingName"
      labelName="Flexible Spending"
      addEntryAction={addFlexibleSpendingEntryAction}
    />
    <Entries
      entriesSelector={flexibleSpendingEntriesSelector}
      entriesAsObjectSelector={flexibleSpendingEntriesAsObjectSelector}
      updateEntryAction={updateFlexibleSpendingEntryAction}
      deleteEntryAction={deleteFlexibleSpendingEntryAction}
    />
  </FlexibleSpendingContainer>
);

const FlexibleSpendingContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default FlexibleSpending;
