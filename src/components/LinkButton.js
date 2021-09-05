import styled from 'styled-components';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import constants from '../constants';

const LinkButton = ({ label, to }) => (
  <StyledLinkButton to={to} data-testid={`${label}LinkButton`}>
    {label}
  </StyledLinkButton>
);

const StyledLinkButton = styled(Link)`
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

LinkButton.propTypes = {
  label: propTypes.string.isRequired,
  to: propTypes.string.isRequired,
};

export default LinkButton;
