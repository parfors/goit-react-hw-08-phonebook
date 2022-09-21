import { useSelector } from 'react-redux';
import { getEmail } from 'redux/authorization/selectors';
import styled from 'styled-components';
import { FaRegSmileWink } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authorization/auth-operations';

export default function UserMenu() {
  const email = useSelector(getEmail);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(logOut());
  };
  return (
    <UserMenuWrap>
      <UserIcon />
      <UserParagraphStyled>{email}</UserParagraphStyled>
      <UserMenuButton onClick={clickHandler}>Logout</UserMenuButton>
    </UserMenuWrap>
  );
}

export const UserMenuWrap = styled.div`
  display: flex;
`;
export const UserMenuButton = styled.button``;

export const UserParagraphStyled = styled.p`
  margin: 0 20px 0 0;
`;

export const UserIcon = styled(FaRegSmileWink)`
  width: 20px;
  height: auto;
  margin-right: 15px;
`;
