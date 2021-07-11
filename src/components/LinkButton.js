import styled from 'styled-components';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkButton = ({ label, to }) => (
  <StyledLinkButton to={to} data-testid={`${label}LinkButton`}>
    {label}
  </StyledLinkButton>
);

LinkButton.propTypes = {
  label: propTypes.string.isRequired,
  to: propTypes.string.isRequired,
};

const StyledLinkButton = styled(Link)``;

export default LinkButton;
