import styled from 'styled-components';
import propTypes from 'prop-types';

const TextInput = ({ onChange, value, name, label, type }) => (
  <Label htmlFor={name}>
    {label}
    <StyledTextInput
      value={value}
      onChange={onChange}
      name={name}
      type={type}
      data-testid={`${name}TextInput`}
    />
  </Label>
);

const Label = styled.label`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

const StyledTextInput = styled.input``;

TextInput.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
};

export default TextInput;
