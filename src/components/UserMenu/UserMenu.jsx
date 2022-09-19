import styled from 'styled-components';

export default function UserMenu() {
  return (
    <UserMenuWrap>
      <UserParagraphStyled>Email</UserParagraphStyled>
      <UserMenuButton>Logout</UserMenuButton>
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
