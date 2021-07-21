import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { fixedCostsSelector } from '../../../store/budget/selectors';

const FixedCostsEntries = () => {
  const entries = useSelector(fixedCostsSelector);
  console.log(entries);
  return <FixedCostsEntriesContainer></FixedCostsEntriesContainer>;
};

const FixedCostsEntriesContainer = styled.ul``;

export default FixedCostsEntries;
