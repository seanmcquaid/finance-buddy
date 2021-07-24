import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  savingsAsEntriesObjectSelector,
  savingsEntriesSelector,
} from '../../../store/budget/selectors';
import {
  deleteSavingsEntryAction,
  updateSavingsEntryAction,
} from '../../../store/budget/actions';
import { Button, TextInput } from '../../../components';
import { useState } from 'react';
import { digitsOnly } from '../../../utils/formValidationUtils';

const SavingsEntries = () => {
  const entriesList = useSelector(savingsEntriesSelector);
  const entriesObject = useSelector(savingsAsEntriesObjectSelector);
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
        updateSavingsEntryAction(
          event.target.name,
          Number.parseInt(event.target.value),
        ),
      );
    } else {
      setErrorMessage('Please enter only numbers');
    }
  };

  const deleteButtonOnClick = (name) => {
    dispatch(deleteSavingsEntryAction(name));
  };

  return (
    <SavingsEntriesContainer>
      <AmountErrorMessage>{errorMessage}</AmountErrorMessage>
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
    </SavingsEntriesContainer>
  );
};

const SavingsEntriesContainer = styled.ul``;

const Entry = styled.li``;

const EntryName = styled.span``;

const AmountErrorMessage = styled.span``;

export default SavingsEntries;
