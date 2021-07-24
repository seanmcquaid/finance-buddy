import { useFormik } from 'formik';
import styled from 'styled-components';
import { Button, TextInput } from '../../../components';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addFlexibleSpendingEntryAction } from '../../../store/budget/actions';
import { atLeastOneCharacter } from '../../../utils/formValidationUtils';

const validationSchema = Yup.object().shape({
  flexibleSpendingName: Yup.string().test(
    'At least one character',
    'This field needs a name that is greater than one character',
    atLeastOneCharacter,
  ),
});

const AddFlexibleSpendingForm = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, setFieldValue } =
    useFormik({
      initialValues: {
        flexibleSpendingName: '',
      },
      validationSchema,
      onSubmit: (values) => {
        dispatch(addFlexibleSpendingEntryAction(values.flexibleSpendingName));
        setFieldValue('flexibleSpendingName', ' ');
      },
    });

  return (
    <Form onSubmit={handleSubmit}>
      {errors.flexibleSpendingName && (
        <FlexibleSpendingInfoErrorMessage>
          {errors.flexibleSpendingName}
        </FlexibleSpendingInfoErrorMessage>
      )}
      <TextInput
        onChange={handleChange}
        name="flexibleSpendingName"
        label="Fixed Cost Name"
        type="text"
        value={values.flexibleSpendingName}
      />
      <Button
        type="submit"
        label="Add Fixed Cost Entry"
        disabled={!!errors.flexibleSpendingName}
      />
    </Form>
  );
};

const Form = styled.form``;

const FlexibleSpendingInfoErrorMessage = styled.span``;

export default AddFlexibleSpendingForm;
