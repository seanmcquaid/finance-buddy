import propTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './components/Navbar';

const Layout = ({ children }) => (
  <LayoutContainer>
    <Navbar />
    {children}
    <Footer>Footer</Footer>
  </LayoutContainer>
);

const LayoutContainer = styled.div``;

const Footer = styled.footer``;

Layout.propTypes = {
  children: propTypes.element.isRequired,
};

export default Layout;
