import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => (
  <StyledNav>
    <NavLinks>
      <NavLinkListItem>
        <NavLink to="/">Home</NavLink>
      </NavLinkListItem>
    </NavLinks>
  </StyledNav>
);

const StyledNav = styled.nav``;

const NavLinks = styled.ul``;

const NavLinkListItem = styled.li``;

const NavLink = styled(Link)``;

export default Navbar;
