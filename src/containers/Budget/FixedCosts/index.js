import styled from 'styled-components';
import AddFixedCostForm from './AddFixedCostForm';
import Totals from '../Totals';
import Entries from '../Entries';
import {
  fixedCostsPercentageSelector,
  fixedCostsTotalSelector,
  fixedCostsEntriesAsObjectSelector,
  fixedCostsEntriesSelector,
} from '../../../store/budget/selectors';
import {
  deleteFixedCostEntryAction,
  updateFixedCostEntryAction,
} from '../../../store/budget/actions';

const FixedCosts = () => (
  <FixedCostsContainer>
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
    <AddFixedCostForm />
  </FixedCostsContainer>
);

const FixedCostsContainer = styled.div``;

export default FixedCosts;
