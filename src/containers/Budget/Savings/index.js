import styled from 'styled-components';
import Totals from '../../../components/Budget/Totals';
import Entries from '../../../components/Budget/Entries';
import AddEntryForm from '../../../components/Budget/AddEntryForm';
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
import { H4 } from '../../../components';

const Savings = () => (
  <SavingsContainer>
    <H4>Savings</H4>
    <Totals
      totalSelector={savingsTotalSelector}
      percentageSelector={savingsPercentageSelector}
    />
    <AddEntryForm
      keyName="savingsName"
      labelName="Savings"
      addEntryAction={addSavingsEntryAction}
    />
    <Entries
      entriesSelector={savingsEntriesSelector}
      entriesAsObjectSelector={savingsEntriesAsObjectSelector}
      updateEntryAction={updateSavingsEntryAction}
      deleteEntryAction={deleteSavingsEntryAction}
    />
  </SavingsContainer>
);

const SavingsContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Savings;
