import styled from 'styled-components';
import propTypes from 'prop-types';

const Checkbox = ({ onChange, isChecked, name, label }) => (
  <Label htmlFor={name}>
    {label}
    <StyledCheckbox
      checked={isChecked}
      onChange={onChange}
      name={name}
      type="checkbox"
      data-testid={`${name}Checkbox`}
    />
  </Label>
);

const Label = styled.label``;

const StyledCheckbox = styled.input``;

Checkbox.propTypes = {
  onChange: propTypes.func.isRequired,
  isChecked: propTypes.bool.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
};

export default Checkbox;
