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

const FlexibleSpending = () => (
  <FlexibleSpendingContainer>
    <Totals
      totalSelector={flexibleSpendingTotalSelector}
      percentageSelector={flexibleSpendingPercentageSelector}
    />
    <Entries
      entriesSelector={flexibleSpendingEntriesSelector}
      entriesAsObjectSelector={flexibleSpendingEntriesAsObjectSelector}
      updateEntryAction={updateFlexibleSpendingEntryAction}
      deleteEntryAction={deleteFlexibleSpendingEntryAction}
    />
    <AddEntryForm
      keyName="flexibleSpendingName"
      labelName="Flexible Spending"
      addEntryAction={addFlexibleSpendingEntryAction}
    />
  </FlexibleSpendingContainer>
);

const FlexibleSpendingContainer = styled.div``;

export default FlexibleSpending;
