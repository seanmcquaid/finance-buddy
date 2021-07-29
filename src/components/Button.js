import styled from 'styled-components';
import propTypes from 'prop-types';
import constants from '../constants';

const Button = ({ onClick, label, type, disabled }) => (
  <StyledButton
    onClick={onClick}
    type={type}
    disabled={disabled}
    data-testid={`${label}Button`}>
    {label}
  </StyledButton>
);

const StyledButton = styled.button`
  padding: 1rem;
  font-family: ${constants.paragraphFont};
  border: 2px solid black;
  border-radius: 8px;
  outline: none;
`;

Button.propTypes = {
  onClick: propTypes.func,
  label: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  disabled: propTypes.bool,
};

export default Button;
