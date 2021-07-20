import { useFormik } from 'formik';
import styled from 'styled-components';
import { Button, TextInput } from '../../../components';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setTotalBudgetAction } from '../../../store/budget/actions';

const digitsOnly = (value) => /^\d+$/.test(value);

const validationSchema = Yup.object().shape({
  totalBudget: Yup.string().test(
    'Digits only',
    'The field should have digits only',
    digitsOnly,
  ),
});

const TotalBudgetForm = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      totalBudget: '0',
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(setTotalBudgetAction(Number.parseInt(values.totalBudget)));
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      {errors.totalBudget && (
        <TotalBudgetErrorMessage>{errors.totalBudget}</TotalBudgetErrorMessage>
      )}
      <TextInput
        onChange={handleChange}
        name="totalBudget"
        label="Total Budget"
        type="text"
        value={values.totalBudget}
      />
      <Button
        type="submit"
        label="Set Total Budget"
        disabled={!!errors.totalBudget}
      />
    </Form>
  );
};

const Form = styled.form``;

const TotalBudgetErrorMessage = styled.span``;

export default TotalBudgetForm;
