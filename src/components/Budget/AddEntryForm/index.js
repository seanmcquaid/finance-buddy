import { useFormik } from 'formik';
import styled from 'styled-components';
import { Button, TextInput } from '../..';
import { useDispatch } from 'react-redux';
import { addEntryValidationSchema } from '../../../utils/formValidationUtils';
import propTypes from 'prop-types';

const AddEntryForm = ({ keyName, labelName, addEntryAction }) => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, setFieldValue } =
    useFormik({
      initialValues: {
        [keyName]: '',
      },
      validationSchema: addEntryValidationSchema(keyName),
      onSubmit: (values) => {
        dispatch(addEntryAction(values[keyName]));
        setFieldValue(keyName, ' ');
      },
    });

  return (
    <Form onSubmit={handleSubmit}>
      {errors[keyName] && <ErrorMessage>{errors[keyName]}</ErrorMessage>}
      <TextInput
        onChange={handleChange}
        name={keyName}
        label={`${labelName} Name`}
        type="text"
        value={values[keyName]}
      />
      <Button
        type="submit"
        label={`Add ${labelName} Entry`}
        disabled={!!errors[keyName]}
      />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ErrorMessage = styled.span``;

AddEntryForm.propTypes = {
  keyName: propTypes.string.isRequired,
  labelName: propTypes.string.isRequired,
  addEntryAction: propTypes.func.isRequired,
};

export default AddEntryForm;
