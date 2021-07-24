import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  fixedCostsEntriesAsObjectSelector,
  fixedCostsEntriesSelector,
} from '../../../store/budget/selectors';
import {
  deleteFixedCostEntryAction,
  updateFixedCostEntryAction,
} from '../../../store/budget/actions';
import { Button, TextInput } from '../../../components';
import { useState } from 'react';
import { digitsOnly } from '../../../utils/formValidationUtils';

const FixedCostsEntries = () => {
  const entriesList = useSelector(fixedCostsEntriesSelector);
  const entriesObject = useSelector(fixedCostsEntriesAsObjectSelector);
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
        updateFixedCostEntryAction(
          event.target.name,
          Number.parseInt(event.target.value),
        ),
      );
    } else {
      setErrorMessage('Please enter only numbers');
    }
  };

  const deleteButtonOnClick = (name) => {
    dispatch(deleteFixedCostEntryAction(name));
  };

  return (
    <FixedCostsEntriesContainer>
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
    </FixedCostsEntriesContainer>
  );
};

const FixedCostsEntriesContainer = styled.ul``;

const Entry = styled.li``;

const EntryName = styled.span``;

const AmountErrorMessage = styled.span``;

export default FixedCostsEntries;
