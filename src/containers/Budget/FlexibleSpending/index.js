import styled from 'styled-components';
import Entries from '../Entries';
import Totals from '../Totals';
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
import AddEntryForm from '../../../components/Budget/AddEntryForm';

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
