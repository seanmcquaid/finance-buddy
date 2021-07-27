import { useFormik } from 'formik';
import styled from 'styled-components';
import { Button, TextInput } from '../../../components';
import { useDispatch } from 'react-redux';
import { addFlexibleSpendingEntryAction } from '../../../store/budget/actions';
import { addEntryValidationSchema } from '../../../utils/formValidationUtils';

const AddFlexibleSpendingForm = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, setFieldValue } =
    useFormik({
      initialValues: {
        flexibleSpendingName: '',
      },
      validationSchema: addEntryValidationSchema('flexibleSpendingName'),
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
        label="Flexible Spending Name"
        type="text"
        value={values.flexibleSpendingName}
      />
      <Button
        type="submit"
        label="Add Flexible Spending Entry"
        disabled={!!errors.flexibleSpendingName}
      />
    </Form>
  );
};

const Form = styled.form``;

const FlexibleSpendingInfoErrorMessage = styled.span``;

export default AddFlexibleSpendingForm;
