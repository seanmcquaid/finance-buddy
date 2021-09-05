import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { TextInput } from '../../../components';
import {
  setCurrentAmountInRetirementAction,
  setMonthlyBudgetAction,
} from '../../../store/retirement/actions';
import {
  currentAmountInRetirementSelector,
  monthlyBudgetSelector,
} from '../../../store/retirement/selectors';

const RetirementInfoForm = () => {
  const monthlyBudget = useSelector(monthlyBudgetSelector);
  const currentAmountInRetirement = useSelector(
    currentAmountInRetirementSelector,
  );
  const dispatch = useDispatch();

  const monthlyBudgetOnChange = (event) => {
    dispatch(setMonthlyBudgetAction(Number(event.target.value)));
  };

  const currentAmountInRetirementOnChange = (event) => {
    dispatch(setCurrentAmountInRetirementAction(Number(event.target.value)));
  };

  return (
    <Form>
      <TextInput
        onChange={monthlyBudgetOnChange}
        value={monthlyBudget}
        type="number"
        label="Monthly Budget"
        name="monthlyBudget"
      />
      <TextInput
        onChange={currentAmountInRetirementOnChange}
        value={currentAmountInRetirement}
        type="number"
        label="Current Amount in Retirement"
        name="currentAmountInRetirement"
      />
    </Form>
  );
};

const Form = styled.form``;

export default RetirementInfoForm;
