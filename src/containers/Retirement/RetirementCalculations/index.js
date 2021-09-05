import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { P } from '../../../components';
import {
  additionalSavingsNeededToRetireSelector,
  amountNeededInRetirementSelector,
  currentAmountInRetirementSelector,
  monthlyBudgetSelector,
  yearsUntilRetirementSelector,
} from '../../../store/retirement/selectors';

const RetirementCalculations = () => {
  const monthlyBudget = useSelector(monthlyBudgetSelector);
  const currentAmountInRetirement = useSelector(
    currentAmountInRetirementSelector,
  );
  const amountNeededInRetirement = useSelector(
    amountNeededInRetirementSelector,
  );
  const additionalSavingsNeededToRetire = useSelector(
    additionalSavingsNeededToRetireSelector,
  );
  const yearsUntilRetirement = useSelector(yearsUntilRetirementSelector);
  return (
    <RetirementCalculationsContainer>
      <P>Monthly Budget : {monthlyBudget}</P>
      <P>Current Amount in Retirement : {currentAmountInRetirement}</P>
      <P>Amount Needed in Retirement : {amountNeededInRetirement}</P>
      <P>
        Additional Savings Needed to Retire : {additionalSavingsNeededToRetire}
      </P>
      <P>Years Until Retirement : {yearsUntilRetirement}</P>
    </RetirementCalculationsContainer>
  );
};

const RetirementCalculationsContainer = styled.div``;

export default RetirementCalculations;
