import styled from 'styled-components';
import AddFixedCostForm from './AddFixedCostForm';
import FixedCostsEntries from './FixedCostsEntries';

const FixedCosts = () => (
  <FixedCostsContainer>
    <FixedCostsEntries />
    <AddFixedCostForm />
  </FixedCostsContainer>
);

const FixedCostsContainer = styled.div``;

export default FixedCosts;
