import styled from 'styled-components';
import { BarLoader } from 'react-spinners';
import propTypes from 'prop-types';

const LoadingSpinner = ({ isLoading }) => (
  <StyledLoader isLoading={isLoading} />
);

const StyledLoader = styled(BarLoader)``;

LoadingSpinner.propTypes = {
  isLoading: propTypes.bool.isRequired,
};

export default LoadingSpinner;
