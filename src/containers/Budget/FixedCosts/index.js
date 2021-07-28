import styled from 'styled-components';
import Totals from '../../../components/Budget/Totals';
import Entries from '../../../components/Budget/Entries';
import AddEntryForm from '../../../components/Budget/AddEntryForm';
import {
  fixedCostsPercentageSelector,
  fixedCostsTotalSelector,
  fixedCostsEntriesAsObjectSelector,
  fixedCostsEntriesSelector,
} from '../../../store/budget/selectors';
import {
  addFixedCostEntryAction,
  deleteFixedCostEntryAction,
  updateFixedCostEntryAction,
} from '../../../store/budget/actions';
import { H4 } from '../../../components';

const FixedCosts = () => (
  <FixedCostsContainer>
    <H4>Fixed Costs</H4>
    <Totals
      totalSelector={fixedCostsTotalSelector}
      percentageSelector={fixedCostsPercentageSelector}
    />
    <Entries
      entriesSelector={fixedCostsEntriesSelector}
      entriesAsObjectSelector={fixedCostsEntriesAsObjectSelector}
      updateEntryAction={updateFixedCostEntryAction}
      deleteEntryAction={deleteFixedCostEntryAction}
    />
    <AddEntryForm
      keyName="fixedCostName"
      labelName="Fixed Cost"
      addEntryAction={addFixedCostEntryAction}
    />
  </FixedCostsContainer>
);

const FixedCostsContainer = styled.div``;

export default FixedCosts;
