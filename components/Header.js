import styled from "styled-components";
import Image from "next/image";

import tinyLogo from "../public/assets/voc-trainer_logo_tiny.png";

export default function Header() {
  return (
    <StyledHeader>
      <span>Voc-Trainer</span>
      <StyledLogo src={tinyLogo} alt="Logo" width={49} height={46} />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2rem;
  position: fixed;
  top: 0;
  // left: 0;
  // right: 0;
  width: 100%;
  box-shadow: var(--boxshadow-primary);
`;

const StyledLogo = styled(Image)`
  width: 3.0625rem;
  height: 2.875rem;
  margin: 5px 0 5px 15px;
`;
