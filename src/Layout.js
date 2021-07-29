import propTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './components/Navbar';

const Layout = ({ children }) => (
  <LayoutContainer>
    <Navbar />
    <Content>{children}</Content>
    <Footer>Footer</Footer>
  </LayoutContainer>
);

const LayoutContainer = styled.div`
  height: 100%;
`;

const Content = styled.div`
  min-height: calc(100vh - 70px);
`;

const Footer = styled.footer`
  height: 50px;
`;

Layout.propTypes = {
  children: propTypes.element.isRequired,
};

export default Layout;
