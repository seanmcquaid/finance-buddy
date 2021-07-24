import { useFormik } from 'formik';
import styled from 'styled-components';
import { Button, TextInput } from '../../../components';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addSavingsEntryAction } from '../../../store/budget/actions';
import { atLeastOneCharacter } from '../../../utils/formValidationUtils';

const validationSchema = Yup.object().shape({
  savingsName: Yup.string().test(
    'At least one character',
    'This field needs a name that is greater than one character',
    atLeastOneCharacter,
  ),
});

const AddSavingsForm = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, setFieldValue } =
    useFormik({
      initialValues: {
        savingsName: '',
      },
      validationSchema,
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
