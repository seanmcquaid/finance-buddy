import { useFormik } from 'formik';
import styled from 'styled-components';
import { Button, TextInput } from '../../../components';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addFixedCostEntryAction } from '../../../store/budget/actions';
import { digitsOnly } from '../../../utils/formValidationUtils';

const validationSchema = Yup.object().shape({
  fixedCostName: Yup.string(),
  fixedCostAmount: Yup.string().test(
    'Digits only',
    'This field should have digits only',
    digitsOnly,
  ),
});

const FixedCostForm = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, setFieldValue } =
    useFormik({
      initialValues: {
        fixedCostName: '',
        fixedCostAmount: '0',
      },
      validationSchema,
      onSubmit: (values) => {},
    });

  return (
    <Form onSubmit={handleSubmit}>
      {errors.fixedCostName && (
        <FixedCostNameErrorMessage>
          {errors.fixedCostName}
        </FixedCostNameErrorMessage>
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
        disabled={!!errors.fixedCostName && !!errors.fixedCostAmount}
      />
    </Form>
  );
};

const Form = styled.form``;

const FixedCostNameErrorMessage = styled.span``;

export default FixedCostForm;
