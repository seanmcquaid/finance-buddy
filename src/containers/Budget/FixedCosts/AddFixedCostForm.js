import { useFormik } from 'formik';
import styled from 'styled-components';
import { Button, TextInput } from '../../../components';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addFixedCostEntryAction } from '../../../store/budget/actions';
import { atLeastOneCharacter } from '../../../utils/formValidationUtils';

const validationSchema = Yup.object().shape({
  fixedCostName: Yup.string().test(
    'At least one character',
    'This field needs a name that is greater than one character',
    atLeastOneCharacter,
  ),
});

const AddFixedCostForm = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, setFieldValue } =
    useFormik({
      initialValues: {
        fixedCostName: '',
      },
      validationSchema,
      onSubmit: (values) => {
        dispatch(addFixedCostEntryAction(values.fixedCostName));
        setFieldValue('fixedCostName', '');
      },
    });

  console.log(values.fixedCostName);

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
