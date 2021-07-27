import { useFormik } from 'formik';
import styled from 'styled-components';
import { Button, TextInput } from '../../../components';
import { useDispatch } from 'react-redux';
import { addSavingsEntryAction } from '../../../store/budget/actions';
import { addEntryValidationSchema } from '../../../utils/formValidationUtils';

const AddSavingsForm = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, setFieldValue } =
    useFormik({
      initialValues: {
        savingsName: '',
      },
      validationSchema: addEntryValidationSchema('savingsName'),
      onSubmit: (values) => {
        dispatch(addSavingsEntryAction(values.savingsName));
        setFieldValue('savingsName', ' ');
      },
    });

  return (
    <Form onSubmit={handleSubmit}>
      {errors.savingsName && (
        <SavingsInfoErrorMessage>{errors.savingsName}</SavingsInfoErrorMessage>
      )}
      <TextInput
        onChange={handleChange}
        name="savingsName"
        label="Savings Name"
        type="text"
        value={values.savingsName}
      />
      <Button
        type="submit"
        label="Add Savings Entry"
        disabled={!!errors.savingsName}
      />
    </Form>
  );
};

const Form = styled.form``;

const SavingsInfoErrorMessage = styled.span``;

export default AddSavingsForm;
