import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { P } from '../../../components';
import {
  additionalSavingsNeededToRetireSelector,
  amountNeededInRetirementSelector,
  yearsUntilRetirementSelector,
} from '../../../store/retirement/selectors';

const RetirementCalculations = () => {
  const amountNeededInRetirement = useSelector(
    amountNeededInRetirementSelector,
  );
  const additionalSavingsNeededToRetire = useSelector(
    additionalSavingsNeededToRetireSelector,
  );
  const yearsUntilRetirement = useSelector(yearsUntilRetirementSelector);
  return (
    <RetirementCalculationsContainer>
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
