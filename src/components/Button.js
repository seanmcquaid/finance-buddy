import styled from 'styled-components';
import propTypes from 'prop-types';
import constants from '../constants';

const Button = ({ onClick, label, type, disabled, secondary }) => (
  <StyledButton
    onClick={onClick}
    type={type}
    disabled={disabled}
    data-testid={`${label}Button`}
    secondary={secondary}>
    {label}
  </StyledButton>
);

const StyledButton = styled.button`
  padding: 1rem;
  font-family: ${constants.paragraphFont};
  border: ${(props) =>
    props.secondary
      ? `1px solid ${constants.black}`
      : `1px solid ${constants.white}`};
  color: ${(props) =>
    props.secondary ? `${constants.black}` : `${constants.white}`};
  background-color: ${(props) =>
    props.secondary ? `${constants.skyBlue}` : `${constants.green}`};
  border-radius: 16px;
  outline: none;
`;

Button.propTypes = {
  onClick: propTypes.func,
  label: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  disabled: propTypes.bool,
  secondary: propTypes.bool,
};

export default Button;
