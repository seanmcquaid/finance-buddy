import propTypes from 'prop-types';
import { MemoryRouter } from 'react-router';

const MockRouter = ({ initialRoute = '/', children }) => (
  <MemoryRouter initialEntries={[initialRoute]}>{children}</MemoryRouter>
);

MockRouter.propTypes = {
  initialRoute: propTypes.string,
  children: propTypes.element.isRequired,
};

export default MockRouter;
