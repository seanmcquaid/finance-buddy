import styled from 'styled-components';
import AddSavingsForm from './AddSavingsForm';
import Entries from '../Entries';
import Totals from '../Totals';
import {
  savingsEntriesAsObjectSelector,
  savingsEntriesSelector,
  savingsPercentageSelector,
  savingsTotalSelector,
} from '../../../store/budget/selectors';
import {
  deleteSavingsEntryAction,
  updateSavingsEntryAction,
} from '../../../store/budget/actions';

const Savings = () => (
  <SavingsContainer>
    <Totals
      totalSelector={savingsTotalSelector}
      percentageSelector={savingsPercentageSelector}
    />
    <Entries
      entriesSelector={savingsEntriesSelector}
      entriesAsObjectSelector={savingsEntriesAsObjectSelector}
      updateEntryAction={updateSavingsEntryAction}
      deleteEntryAction={deleteSavingsEntryAction}
    />
    <AddSavingsForm />
  </SavingsContainer>
);

const SavingsContainer = styled.div``;

export default Savings;
