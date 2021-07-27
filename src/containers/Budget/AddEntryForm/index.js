import { useFormik } from 'formik';
import styled from 'styled-components';
import { Button, TextInput } from '../../../components';
import { useDispatch } from 'react-redux';
import { addEntryValidationSchema } from '../../../utils/formValidationUtils';
import propTypes from 'prop-types';

const AddEntryForm = ({ key, labelName, addEntryAction }) => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, setFieldValue } =
    useFormik({
      initialValues: {
        [key]: '',
      },
      validationSchema: addEntryValidationSchema(key),
      onSubmit: (values) => {
        dispatch(addEntryAction(values[key]));
        setFieldValue(key, ' ');
      },
    });

  return (
    <Form onSubmit={handleSubmit}>
      {errors[key] && <ErrorMessage>{errors[key]}</ErrorMessage>}
      <TextInput
        onChange={handleChange}
        name={key}
        label={`${labelName} Name`}
        type="text"
        value={values[key]}
      />
      <Button
        type="submit"
        label={`Add ${labelName} Entry`}
        disabled={!!errors[key]}
      />
    </Form>
  );
};

const Form = styled.form``;

const ErrorMessage = styled.span``;

AddEntryForm.propTypes = {
  key: propTypes.string.isRequired,
  labelName: propTypes.string.isRequired,
  addEntryAction: propTypes.func.isRequired,
};

export default AddEntryForm;
