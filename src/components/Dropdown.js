import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import propTypes from 'prop-types';

const Dropdown = ({ options, onChange, name, label, value }) => (
  <StyledLabel>
    {label}
    <StyledSelect
      name={name}
      onChange={onChange}
      data-testid={`${name}Dropdown`}
      value={value}>
      {options.map((option) => (
        <StyledOption value={option} key={uuid()}>
          {option}
        </StyledOption>
      ))}
    </StyledSelect>
  </StyledLabel>
);

const StyledLabel = styled.label``;

const StyledSelect = styled.select``;

const StyledOption = styled.option``;

Dropdown.propTypes = {
  options: propTypes.arrayOf(propTypes.any.isRequired),
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  value: propTypes.any.isRequired,
};

export default Dropdown;
