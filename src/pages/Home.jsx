import { SectionStyled, TitleStyled } from 'components';
import { AiOutlineHome } from 'react-icons/ai';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <SectionStyled>
        <TitleStyled>Home Page</TitleStyled>
        <HomeIconStyled />
      </SectionStyled>
    </>
  );
}

export const HomeIconStyled = styled(AiOutlineHome)`
  width: 120px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  display: block;
  &:hover {
    fill: blue;
  }
`;
