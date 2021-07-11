import styled from 'styled-components';
import propTypes from 'prop-types';

const Button = ({ onClick, label, type, disabled }) => (
  <StyledButton
    onClick={onClick}
    type={type}
    disabled={disabled}
    data-testid={`${label}Button`}>
    {label}
  </StyledButton>
);

const StyledButton = styled.button``;

Button.propTypes = {
  onClick: propTypes.func,
  label: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  disabled: propTypes.bool,
};

export default Button;
