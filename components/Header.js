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
      <ProgressBox>
        {countFinished}{" "}
        <InfoButton
          onMouseEnter={() => {
            setShowProgress(true);
          }}
          onMouseLeave={() => {
            setShowProgress(false);
          }}
          onClick={() => {
            setShowProgress(!showProgress);
          }}
        ><Wrapper> <Icon variant="info" size={18} color="#ebb134" /></Wrapper>
         
        </InfoButton>
        {showProgress && (
          <ProgressInfo>
            <Line>
              <span>Finished:</span> <span>{countFinished}</span>
            </Line>
            <Line>
              {" "}
              <span>To Learn:</span> <span>{countInProgress}</span>
            </Line>
            <Line>
              {" "}
              <span>Total:</span> <span>{countTotal}</span>
            </Line>
          </ProgressInfo>
        )}
      </ProgressBox>
    </StyledHeader>
  );
}
const Wrapper=styled.span`
transform: translateY(10%);
`;
const Line = styled.p`
  display: flex;
  justify-content: space-between;
  padding-top: 0.2em;
  /* &:last-child{
    border-top: 1px solid black;
  } */
`;
const ProgressInfo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(110%);
  background-color: #fff;
  border-radius: 0.5em;
  border: 2px solid #ebb134;
  padding: 0.4rem;
  font-size: 0.8em;
  line-height: 1.5em;
  width: 8rem;
  box-shadow: 0 5px 5px 5px #fff;
`;
const InfoButton = styled.button`
  all: unset;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  align-items: end;
`;
const Title = styled.span`
  grid-area: title;
  text-align: right;
  margin-top: 0.3em;
`;

const ProgressBox = styled.div`
  font-size: 1rem;
  line-height: 1rem;
  display: flex;
  gap: 0.3em;
  align-items: baseline;
  position: relative;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 0.3em;
  justify-content: center;
  font-family: var(--fontfamily-special);
  font-size: 1.3rem;
  background-color: #ffffff;
  color: var(--darktext);
  box-shadow: var(--boxshadow-primary);
`;

const StyledLogo = styled(Image)`
  grid-area: logo;
  width: 3.0625rem;
  height: 2.875rem;
  margin: 0.5rem 0 0.4rem 0rem;
`;
