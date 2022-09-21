import { LabelSpanStyled, SectionStyled, TitleStyled } from 'components';
import styled from 'styled-components';
import useForm from 'hooks/useForm';
import { useDispatch } from 'react-redux';
import { sighUp } from 'redux/authorization/auth-operations';

const initialState = {
  name: '',
  email: '',
  password: '',
};

export default function Register() {
  const dispatch = useDispatch();
  const submitFunction = data => {
    dispatch(sighUp(data));
  };

  const { state, handleChange, handleSubmit } = useForm(
    initialState,
    submitFunction
  );

  const { name, email, password } = state;

  return (
    <SectionStyled>
      <TitleStyled>Register Form</TitleStyled>
      <RegisterFormStyled onSubmit={handleSubmit}>
        <RegisterLabelStyled>
          <LabelSpanStyled>Name</LabelSpanStyled>
          <RegisterInputStyled
            value={name}
            name="name"
            onChange={handleChange}
            type="text"
          />
        </RegisterLabelStyled>
        <RegisterLabelStyled>
          <LabelSpanStyled>Email</LabelSpanStyled>
          <RegisterInputStyled
            value={email}
            name="email"
            onChange={handleChange}
            type="email"
          />
        </RegisterLabelStyled>
        <RegisterLabelStyled>
          <LabelSpanStyled>Password</LabelSpanStyled>
          <RegisterInputStyled
            value={password}
            name="password"
            onChange={handleChange}
            type="password"
          />
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
