import { SectionStyled } from 'components';
import UserMenu from 'components/UserMenu/UserMenu';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { checkCurrentLogin } from 'redux/authorization/auth-operations';
import { getIsLogIn, getLoading } from 'redux/selectors';
import styled from 'styled-components';

export default function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkCurrentLogin());
  }, [dispatch]);
  const isLoggedIn = useSelector(getIsLogIn);
  const loading = useSelector(getLoading);

  let visibleMenu;
  if (loading === true) {
    visibleMenu = <LoadingStyled>Loading...</LoadingStyled>;
  } else if (isLoggedIn === true) {
    visibleMenu = <UserMenu />;
  } else if (isLoggedIn === false && loading === false) {
    visibleMenu = (
      <NavContainerStyled>
        <NavLinkStyled to="/register">Sign up</NavLinkStyled>
        <NavLinkStyled to="/login">Sign in</NavLinkStyled>
      </NavContainerStyled>
    );
  }

  return (
    <>
      <SectionStyled>
        <ToastContainer position="top-center" />
        <HeaderStyled>
          <NavContainerStyled>
            <NavLinkStyled to="/home">Home</NavLinkStyled>
            {isLoggedIn && (
              <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
            )}
          </NavContainerStyled>
          {visibleMenu}
        </HeaderStyled>
        <hr />
        <Outlet />
      </SectionStyled>
    </>
  );
}

export const LoadingStyled = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: blue;
`;

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
