import styled from "styled-components";
import Image from "next/image";
import tinyLogo from "../public/assets/voc-trainer_logo_tiny.png";
import Icon from "./Icon";
import { useState } from "react";

export default function Header({ countFinished, countInProgress, countTotal }) {
  const [showProgress, setShowProgress] = useState(false);
  return (
    <StyledHeader>
      <Title>Voc-Trainer</Title>
      <StyledLogo src={tinyLogo} alt="Logo" />
      <ProgressBox
        onMouseOver={() => {
          setShowProgress(true);
          console.log("hhello");
        }}
        onMouseOut={() => {
          setShowProgress(false);
        }}
      >
        {showProgress && <ProgressDetails>Hello</ProgressDetails>}
        {/* <ProgressElement>
          <Icon variant="total" size={10} />
          {220}
        </ProgressElement>
        <ProgressElement>
          <Icon variant="progress" size={10} />
          {115}
        </ProgressElement> */}
        <ProgressElement>
          <Icon variant="finished" size={13} />
          {105}
        </ProgressElement>
        <ProgressElement>
          <Icon variant="info" size={18} color="#ebb134" />
        </ProgressElement>
      </ProgressBox>
    </StyledHeader>
  );
}
const ProgressDetails = styled.div`
  height: 5em;
  position: absolute;
  bottom: -5em;
  width: 5em;
  background-color: cornflowerblue;

  z-index: 100;
`;
const Title = styled.span`
  grid-area: title;
  text-align: right;
  margin-top: 0.3em;
`;
const ProgressElement = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.4em;
  &:last-child {
    @media (min-width: 768px) {
      display: none;
    }
    padding-left: 0.5em;
    &:hover {
      cursor: pointer;
    }
  }
`;
const ProgressBox = styled.div`
  grid-area: progress;
  display: flex;
  justify-self: flex-end;
  gap: 1em;
  align-items: center;
  font-size: 0.7em;
  font-family: var(--fontfamily-regular);
  margin-top: -0.85em;
  border: 1px solid green;
  position: relative;
`;
const StyledHeader = styled.header`
  display: grid;
  grid-template-areas:
    "title logo"
    "progress logo";
  background-color: #ffffff;
  color: var(--darktext);
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
  grid-area: logo;
  width: 3.0625rem;
  height: 2.875rem;
  margin: 0.5rem 0 0.4rem 1rem;
`;
