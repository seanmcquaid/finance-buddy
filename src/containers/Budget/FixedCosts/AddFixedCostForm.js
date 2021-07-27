import { useFormik } from 'formik';
import styled from 'styled-components';
import { Button, TextInput } from '../../../components';
import { useDispatch } from 'react-redux';
import { addFixedCostEntryAction } from '../../../store/budget/actions';
import { addEntryValidationSchema } from '../../../utils/formValidationUtils';

const AddFixedCostForm = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, setFieldValue } =
    useFormik({
      initialValues: {
        fixedCostName: '',
      },
      validationSchema: addEntryValidationSchema('fixedCostName'),
      onSubmit: (values) => {
        dispatch(addFixedCostEntryAction(values.fixedCostName));
        setFieldValue('fixedCostName', ' ');
      },
    });

  return (
    <Form onSubmit={handleSubmit}>
      {errors.fixedCostName && (
        <FixedCostInfoErrorMessage>
          {errors.fixedCostName}
        </FixedCostInfoErrorMessage>
      )}
      <TextInput
        onChange={handleChange}
        name="fixedCostName"
        label="Fixed Cost Name"
        type="text"
        value={values.fixedCostName}
      />
      <Button
        type="submit"
        label="Add Fixed Cost Entry"
        disabled={!!errors.fixedCostName}
      />
    </Form>
  );
};

const Form = styled.form``;

const FixedCostInfoErrorMessage = styled.span``;

export default AddFixedCostForm;
