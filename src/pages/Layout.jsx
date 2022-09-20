import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { SectionStyled } from 'components';
import { Outlet } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';

export default function Layout() {
  return (
    <>
      <SectionStyled>
        <HeaderStyled>
          <NavContainerStyled>
            <NavLinkStyled to="/home">Home</NavLinkStyled>
            <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
          </NavContainerStyled>
          <NavContainerStyled>
            <NavLinkStyled to="/register">Sign up</NavLinkStyled>
            <NavLinkStyled to="/login">Sign in</NavLinkStyled>
          </NavContainerStyled>
          <UserMenu />
        </HeaderStyled>
        <Outlet />
      </SectionStyled>
    </>
  );
}

export const HeaderStyled = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: white;
  padding: 10px;
  border-radius: 4px;
  background-color: black;
  &.active {
    color: blue;
    background-color: grey;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
  &:first-child {
    margin-left: 20px;
  }
  &:hover {
    color: blue;
  }
`;

export const NavContainerStyled = styled.nav``;
