import styled from 'styled-components';
import propTypes from 'prop-types';

const ExternalLinkButton = ({ label, to }) => (
  <StyledExternalLinkButton
    href={to}
    data-testid={`${label}ExternalLinkButton`}
    target="_blank">
    {label}
  </StyledExternalLinkButton>
);

ExternalLinkButton.propTypes = {
  label: propTypes.string.isRequired,
  to: propTypes.string.isRequired,
};

const StyledExternalLinkButton = styled.a``;

export default ExternalLinkButton;
