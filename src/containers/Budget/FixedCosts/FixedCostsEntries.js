import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  fixedCostsAsObjectSelector,
  fixedCostsSelector,
} from '../../../store/budget/selectors';
import { deleteFixedCostEntryAction } from '../../../store/budget/actions';
import { Button } from '../../../components';

const FixedCostsEntries = () => {
  const entriesList = useSelector(fixedCostsSelector);
  const entriesObject = useSelector(fixedCostsAsObjectSelector);
  const dispatch = useDispatch();

  // to do - include update input action

  const deleteButtonOnClick = (name) => {
    dispatch(deleteFixedCostEntryAction(name));
  };

  return (
    <FixedCostsEntriesContainer>
      {entriesList.map(({ name }, i) => (
        <Entry key={i}>
          <EntryName>{name}</EntryName>
          <Button
            onClick={() => deleteButtonOnClick(name)}
            label="Delete"
            type="button"
          />
        </Entry>
      ))}
    </FixedCostsEntriesContainer>
  );
};

const FixedCostsEntriesContainer = styled.ul``;

const Entry = styled.li``;

const EntryName = styled.span``;

export default FixedCostsEntries;
