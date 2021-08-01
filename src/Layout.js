import propTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import constants from './constants';

const Layout = ({ children }) => (
  <LayoutContainer>
    <Navbar />
    <Content>{children}</Content>
    <Footer> &copy; Musician That Codes</Footer>
  </LayoutContainer>
);

const LayoutContainer = styled.div`
  height: 100%;
`;

const Content = styled.div`
  min-height: calc(100vh - 70px);
`;

const Footer = styled.footer`
  text-align: center;
  height: 50px;
  width: 100%;
  background-color: ${constants.darkBlue};
  padding: 1rem;
`;

Layout.propTypes = {
  children: propTypes.element.isRequired,
};

export default Layout;
