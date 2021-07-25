import styled from 'styled-components';
import AddFlexibleSpendingForm from './AddFlexibleSpendingForm';
import Entries from './Entries';
import Totals from './Totals';
import {
  flexibleSpendingEntriesAsObjectSelector,
  flexibleSpendingEntriesSelector,
  flexibleSpendingPercentageSelector,
  flexibleSpendingTotalSelector,
} from '../../../store/budget/selectors';
import {
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
    <AddFlexibleSpendingForm />
  </FlexibleSpendingContainer>
);

const FlexibleSpendingContainer = styled.div``;

export default FlexibleSpending;
