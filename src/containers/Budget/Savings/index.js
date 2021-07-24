import styled from 'styled-components';
import AddSavingsForm from './AddSavingsForm';
import SavingsEntries from './SavingsEntries';
import SavingsTotals from './SavingsTotals';

const Savings = () => (
  <SavingsContainer>
    <SavingsTotals />
    <SavingsEntries />
    <AddSavingsForm />
  </SavingsContainer>
);

const SavingsContainer = styled.div``;

export default Savings;
