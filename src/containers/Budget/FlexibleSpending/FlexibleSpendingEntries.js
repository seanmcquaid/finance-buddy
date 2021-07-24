import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  flexibleSpendingAsObjectSelector,
  flexibleSpendingSelector,
} from '../../../store/budget/selectors';
import {
  deleteFlexibleSpendingEntryAction,
  updateFlexibleSpendingEntryAction,
} from '../../../store/budget/actions';
import { Button, TextInput } from '../../../components';
import { useState } from 'react';
import { digitsOnly } from '../../../utils/formValidationUtils';

const FlexibleSpendingEntries = () => {
  const entriesList = useSelector(flexibleSpendingSelector);
  const entriesObject = useSelector(flexibleSpendingAsObjectSelector);
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
        updateFlexibleSpendingEntryAction(
          event.target.name,
          Number.parseInt(event.target.value),
        ),
      );
    } else {
      setErrorMessage('Please enter only numbers');
    }
  };

  const deleteButtonOnClick = (name) => {
    dispatch(deleteFlexibleSpendingEntryAction(name));
  };

  return (
    <FlexibleSpendingEntriesContainer>
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
    </FlexibleSpendingEntriesContainer>
  );
};

const FlexibleSpendingEntriesContainer = styled.ul``;

const Entry = styled.li``;

const EntryName = styled.span``;

const AmountErrorMessage = styled.span``;

export default FlexibleSpendingEntries;
