import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Dropdown, TextInput } from '../../../components';
import {
  mortgageLengthSelector,
  interestRateSelector,
} from '../../../store/mortgage/selectors';
import {
  setMortgageLengthAction,
  setInterestRateAction,
} from '../../../store/mortgage/actions';

const MortgageInfoForm = () => {
  const mortgageLength = useSelector(mortgageLengthSelector);
  const mortgageLengthOptions = useMemo(() => [15, 30], []);
  const interestRate = useSelector(interestRateSelector);
  const dispatch = useDispatch();

  const mortgageLengthOnChange = (event) => {
    dispatch(setMortgageLengthAction(Number(event.target.value)));
  };

  const interestRateOnChange = (event) => {
    dispatch(setInterestRateAction(Number(event.target.value)));
  };

  return (
    <Form>
      <Dropdown
        onChange={mortgageLengthOnChange}
        value={mortgageLength}
        name="mortgageLength"
        options={mortgageLengthOptions}
        label="Mortgage Length"
      />
      <TextInput
        onChange={interestRateOnChange}
        value={interestRate}
        type="number"
        label="Interest Rate"
        name="interestRate"
      />
    </Form>
  );
};

const Form = styled.form``;

export default MortgageInfoForm;
