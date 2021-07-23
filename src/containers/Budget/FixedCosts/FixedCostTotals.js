import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  fixedCostsPercentageSelector,
  fixedCostsTotalSelector,
} from '../../../store/budget/selectors';

const FixedCostTotals = () => {
  const fixedCostsTotal = useSelector(fixedCostsTotalSelector);
  const fixedCostsPercentage = useSelector(fixedCostsPercentageSelector);

  return (
    <FixedCostTotalsContainer>
      <FixedCostsTotal>Fixed Costs Total : {fixedCostsTotal}</FixedCostsTotal>
      <FixedCostsPercentage>
        Fixed Costs Percentage : {fixedCostsPercentage}
      </FixedCostsPercentage>
    </FixedCostTotalsContainer>
  );
};

const FixedCostTotalsContainer = styled.div``;

const FixedCostsTotal = styled.span``;

const FixedCostsPercentage = styled.span``;

export default FixedCostTotals;
