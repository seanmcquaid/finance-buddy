import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { fixedCostsSelector } from '../../../store/budget/selectors';

const FixedCostsEntries = () => {
  const entries = useSelector(fixedCostsSelector);

  // to do - include delete button action
  // to do - include update input action

  return (
    <FixedCostsEntriesContainer>
      {entries.map(({ name }, i) => (
        <Entry key={i}>
          <EntryName>{name}</EntryName>
        </Entry>
      ))}
    </FixedCostsEntriesContainer>
  );
};

const FixedCostsEntriesContainer = styled.ul``;

const Entry = styled.li``;

const EntryName = styled.span``;

export default FixedCostsEntries;
