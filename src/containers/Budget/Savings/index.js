import styled from 'styled-components';
import Entries from '../Entries';
import Totals from '../Totals';
import {
  savingsEntriesAsObjectSelector,
  savingsEntriesSelector,
  savingsPercentageSelector,
  savingsTotalSelector,
} from '../../../store/budget/selectors';
import {
  addSavingsEntryAction,
  deleteSavingsEntryAction,
  updateSavingsEntryAction,
} from '../../../store/budget/actions';
import AddEntryForm from '../../../components/Budget/AddEntryForm';

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
    <AddEntryForm
      keyName="savingsName"
      labelName="Savings"
      addEntryAction={addSavingsEntryAction}
    />
  </SavingsContainer>
);

const SavingsContainer = styled.div``;

export default Savings;
