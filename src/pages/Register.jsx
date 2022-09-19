import { LabelSpanStyled, SectionStyled, TitleStyled } from 'components';
import styled from 'styled-components';

export default function Register() {
  return (
    <SectionStyled>
      <TitleStyled>Register Form</TitleStyled>
      <RegisterFormStyled>
        <RegisterLabelStyled>
          <LabelSpanStyled>Name</LabelSpanStyled>
          <RegisterInputStyled type="text" />
        </RegisterLabelStyled>
        <RegisterLabelStyled>
          <LabelSpanStyled>Email</LabelSpanStyled>
          <RegisterInputStyled type="email" />
        </RegisterLabelStyled>
        <RegisterLabelStyled>
          <LabelSpanStyled>Password</LabelSpanStyled>
          <RegisterInputStyled type="password" />
        </RegisterLabelStyled>
        <RegisterButtonStyled type="submit">Sign up</RegisterButtonStyled>
      </RegisterFormStyled>
    </SectionStyled>
  );
}

export const RegisterFormStyled = styled.form`
  margin: 0 auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  border: 1px solid black;
`;

export const RegisterLabelStyled = styled.label`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
export const RegisterInputStyled = styled.input``;
export const RegisterButtonStyled = styled.button``;
