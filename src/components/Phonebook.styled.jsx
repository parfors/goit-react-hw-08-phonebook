import styled from 'styled-components';

export const SectionStyled = styled.section`
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const TitleStyled = styled.h2`
  font-size: 18 px;
  font-weight: 600;
  text-align: center;
`;

export const FormWrapStyled = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const FormStyled = styled.form`
  width: calc(100% / 2);
`;

export const LabelStyled = styled.label`
  font-size: 14px;
  font-weight: 400;
  margin-left: 10px;
  margin-bottom: 10px;
  color: black;
  display: block;
`;

export const InputStyled = styled.input`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 400;
  color: black;
  border: 2px solid black;
  border-radius: 4px;
`;
export const LabelSpanStyled = styled.span`
  display: inline-block;
  width: 60px;
`;

export const ButtonStyled = styled.button`
  font-size: 14px;
  font-weight: 400;
  margin-left: 10px;
  color: black;
  display: block;
  margin: 15px 0 0 100px;
`;

export const ListStyled = styled.ol`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  flex-basis: calc(100% / 4 - 20px);
  margin-left: 20px;
  margin-bottom: 10px;
`;

export const FilterWrapStyled = styled.div`
  text-align: center;
`;

export const ParagraphStyled = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 10px 0 5px 20px;
`;

export const ButtonDeleteStyled = styled.button`
  font-size: 14px;
  font-weight: 400;
  margin: 10px 0 0 50px;
`;

export const RadioInputWrapStyled = styled.div``;

export const InputRadioStyled = styled.input`
  background-color: #0080002f;
  margin-left: 20px;
  margin-right: 10px;
`;

export const LabelRadio = styled(LabelStyled)``;

export const InputCheckStyled = styled.input`
  margin-left: 20px;
  margin-right: 10px;
`;
