import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button, TextInput } from '../../../components';
import propTypes from 'prop-types';

const Entries = ({
  entriesSelector,
  entriesAsObjectSelector,
  updateEntryAction,
  deleteEntryAction,
}) => {
  const entriesList = useSelector(entriesSelector);
  const entriesObject = useSelector(entriesAsObjectSelector);
  const dispatch = useDispatch();

  const onChange = (event) => {
    dispatch(updateEntryAction(event.target.name, event.target.value));
  };

  const deleteButtonOnClick = (name) => {
    dispatch(deleteEntryAction(name));
  };

  return (
    <EntriesContainer>
      <EntriesList>
        {entriesList.map(({ name }, i) => (
          <Entry key={i}>
            <EntryName>{name}</EntryName>
            <TextInput
              label="Amount"
              name={name}
              value={entriesObject[name]}
              type="number"
              onChange={onChange}
            />
            <Button
              onClick={() => deleteButtonOnClick(name)}
              label="Delete"
              type="button"
            />
          </Entry>
        ))}
      </EntriesList>
    </EntriesContainer>
  );
};

const EntriesContainer = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 20rem;
`;

const EntriesList = styled.ul`
  list-style: none;
`;

const Entry = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

const EntryName = styled.span``;

Entries.propTypes = {
  entriesSelector: propTypes.func.isRequired,
  entriesAsObjectSelector: propTypes.func.isRequired,
  updateEntryAction: propTypes.func.isRequired,
  deleteEntryAction: propTypes.func.isRequired,
};

export default Entries;
