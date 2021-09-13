import styled from 'styled-components';
import { TextInput } from '../../../components';
import { useDispatch } from 'react-redux';
import { setTotalBudgetAction } from '../../../store/budget/actions';
import { useSelector } from 'react-redux';
import { totalBudgetSelector } from '../../../store/budget/selectors';

const TotalBudgetForm = () => {
  const dispatch = useDispatch();
  const totalBudget = useSelector(totalBudgetSelector);

  const onChange = (event) => {
    dispatch(setTotalBudgetAction(Number(event.target.value)));
  };

  return (
    <Form>
      <TextInput
        onChange={onChange}
        name="totalBudget"
        label="Total Budget"
        type="number"
        value={totalBudget}
      />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default TotalBudgetForm;
