import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button, TextInput } from '../../../components';
import { useState } from 'react';
import { digitsOnly } from '../../../utils/formValidationUtils';
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
  const [state, setState] = useState(entriesObject);
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (event) => {
    if (digitsOnly(event.target.value)) {
      setState((prevState) => ({
        ...prevState,
        [event.target.name]: Number.parseInt(event.target.value),
      }));
      setErrorMessage('');
      dispatch(
        updateEntryAction(
          event.target.name,
          Number.parseInt(event.target.value),
        ),
      );
    } else {
      setErrorMessage('Please enter only numbers');
    }
  };

  const deleteButtonOnClick = (name) => {
    dispatch(deleteEntryAction(name));
  };

  return (
    <EntriesContainer>
      <AmountErrorMessage>{errorMessage}</AmountErrorMessage>
      <EntriesList>
        {entriesList.map(({ name }, i) => (
          <Entry key={i}>
            <EntryName>{name}</EntryName>
            <TextInput
              label="Amount"
              name={name}
              value={state[name]}
              type="text"
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

const EntriesContainer = styled.div``;

const EntriesList = styled.ul``;

const Entry = styled.li``;

const EntryName = styled.span``;

const AmountErrorMessage = styled.span``;

Entries.propTypes = {
  entriesSelector: propTypes.func.isRequired,
  entriesAsObjectSelector: propTypes.func.isRequired,
  updateEntryAction: propTypes.func.isRequired,
  deleteEntryAction: propTypes.func.isRequired,
};

export default Entries;
