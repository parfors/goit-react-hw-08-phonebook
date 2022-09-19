import { SectionStyled, TitleStyled, LabelSpanStyled } from 'components';
import {
  RegisterLabelStyled,
  RegisterFormStyled,
  RegisterInputStyled,
  RegisterButtonStyled,
} from './Register';

export default function Login() {
  return (
    <SectionStyled>
      <TitleStyled>Sign In Form</TitleStyled>
      <RegisterFormStyled>
        <RegisterLabelStyled>
          <LabelSpanStyled>Enter your Name</LabelSpanStyled>
          <RegisterInputStyled type="text" />
        </RegisterLabelStyled>
        <RegisterLabelStyled>
          <LabelSpanStyled>Enter your Password</LabelSpanStyled>
          <RegisterInputStyled type="password" />
        </RegisterLabelStyled>
        <RegisterButtonStyled type="submit">Sign in</RegisterButtonStyled>
      </RegisterFormStyled>
    </SectionStyled>
  );
}
