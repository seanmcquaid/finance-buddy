import { Link } from 'react-router-dom';
import styled from 'styled-components';
import constants from '../constants';

const Navbar = () => (
  <StyledNav>
    <NavLinks>
      <NavLinkListItem>
        <NavLink to="/">Home</NavLink>
      </NavLinkListItem>
      <NavLinkListItem>
        <NavLink to="/budget">Budget</NavLink>
      </NavLinkListItem>
      <NavLinkListItem>
        <NavLink to="/mortgage">Mortgage</NavLink>
      </NavLinkListItem>
      <NavLinkListItem>
        <NavLink to="/retirement">Retirement</NavLink>
      </NavLinkListItem>
    </NavLinks>
  </StyledNav>
);

const StyledNav = styled.nav`
  width: 100%;
  background-color: ${constants.darkBlue};
  padding: 1rem;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
`;

const NavLinkListItem = styled.li`
  padding: 0 0.5rem;
`;

const NavLink = styled(Link)`
  color: ${constants.white};
  text-decoration: none;
`;

export default Navbar;
