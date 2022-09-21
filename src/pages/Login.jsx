import { SectionStyled, TitleStyled, LabelSpanStyled } from 'components';
import {
  RegisterLabelStyled,
  RegisterFormStyled,
  RegisterInputStyled,
  RegisterButtonStyled,
} from './Register';
import useForm from 'hooks/useForm';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authorization/auth-operations';

const initialState = {
  email: '',
  password: '',
};

export default function Login() {
  const dispatch = useDispatch();
  const submitFunction = data => {
    dispatch(logIn(data));
  };

  const { handleChange, handleSubmit, state } = useForm(
    initialState,
    submitFunction
  );

  const { email, password } = state;

  return (
    <SectionStyled>
      <TitleStyled>Sign In Form</TitleStyled>
      <RegisterFormStyled onSubmit={handleSubmit}>
        <RegisterLabelStyled>
          <LabelSpanStyled>Enter your Email</LabelSpanStyled>
          <RegisterInputStyled
            onChange={handleChange}
            value={email}
            name="email"
            type="text"
          />
        </RegisterLabelStyled>
        <RegisterLabelStyled>
          <LabelSpanStyled>Enter your Password</LabelSpanStyled>
          <RegisterInputStyled
            onChange={handleChange}
            value={password}
            name="password"
            type="password"
          />
        </RegisterLabelStyled>
        <RegisterButtonStyled type="submit">Sign in</RegisterButtonStyled>
      </RegisterFormStyled>
    </SectionStyled>
  );
}
