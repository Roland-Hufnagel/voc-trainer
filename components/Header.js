import styled from "styled-components";
import Image from "next/image";
import tinyLogo from "../public/assets/voc-trainer_logo_tiny.png";

export default function Header({ success }) {
  return (
    <StyledHeader>
      <span>Voc-Trainer</span>
      <StyledLogo src={tinyLogo} alt="Logo" width={195} height={184} />
      {success} 💪
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #ffffff;
  color: var(--darktext);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: var(--fontfamily-special);
  font-size: 1.3rem;
  width: 100%;
  z-index: 100;
  box-shadow: var(--boxshadow-primary);

  & span {
    padding-top: 0.6rem;
  }
`;

const StyledLogo = styled(Image)`
  width: 3.0625rem;
  height: 2.875rem;
  margin: 0.4rem 0 0.4rem 1rem;
`;
