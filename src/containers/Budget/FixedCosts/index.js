import styled from 'styled-components';
import AddFixedCostForm from './AddFixedCostForm';
import FixedCostsEntries from './FixedCostsEntries';
import FixedCostTotals from './FixedCostTotals';

const FixedCosts = () => (
  <FixedCostsContainer>
    <FixedCostTotals />
    <FixedCostsEntries />
    <AddFixedCostForm />
  </FixedCostsContainer>
);

const FixedCostsContainer = styled.div``;

export default FixedCosts;
