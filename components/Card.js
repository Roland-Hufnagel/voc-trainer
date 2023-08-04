import styled from "styled-components";
import { useState } from "react";
import { Button } from "./Button";

export default function Card({ voc, handleHit, handleView }) {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <StyledCard>
      <Word>{voc.word}</Word>
      <ViewsIcon>👁</ViewsIcon>
      <ViewsCount>{voc.views}</ViewsCount>
      <HitsIcon>✓</HitsIcon>
      <HitsCount>{voc.hits}</HitsCount>
      <HorizontalLine />
      <Translation>{voc.translation}</Translation>
      <WrongButton>✕</WrongButton>
      <CorrectButton>✓</CorrectButton>
      <Slider></Slider>
      {/* <p>
        {voc.word} {voc.views} {voc.hits}
        {showTranslation && `\n = \n ${voc.translation}`}
      </p> */}
      {/* {!showTranslation && (
      </p> */}
      {/* {!showTranslation && (
        <Button
          onClick={() => {
            handleHit(voc.id);
            handleView(voc.id);
            setShowTranslation(
              (previousShowTranslation) => !previousShowTranslation
            );
          }}
        >
          Show answer
        </Button>
      )} */}
    </StyledCard>
  );
}

const StyledCard = styled.li`
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 2rem 2rem;
  grid-template-rows: 1fr 1fr 1px 1fr 1fr;
  grid-template-areas:
    "word views-icon views-count"
    "word hits-icon hits-count"
    "hr hr hr"
    "translation . wrong-button"
    "translation . correct-button";
  border: 2px solid #ddd;
  border-radius: 0.5rem;
  margin: 0.7rem auto;
  padding: 0.5rem;
  height: 10rem;
  width: 15rem;
`;

const Word = styled.p`
  grid-area: word;
  align-self: center;
`;

const ViewsIcon = styled.div`
  grid-area: views-icon;
  align-self: center;
`;

const ViewsCount = styled.p`
  grid-area: views-count;
  align-self: center;
`;

const HitsIcon = styled.div`
  grid-area: hits-icon;
  align-self: center;
`;

const HitsCount = styled.div`
  grid-area: hits-count;
  align-self: center;
`;

const Translation = styled.div`
  grid-area: translation;
  align-self: center;
`;

const WrongButton = styled.div`
  grid-area: wrong-button;
  align-self: center;
`;

const CorrectButton = styled.div`
  grid-area: correct-button;
  align-self: center;
`;

const HorizontalLine = styled.hr`
  all: unset;
  grid-area: hr;
  border-bottom: 1px solid #f3f3f3;
  width: 100%;
`;

const Slider = styled.div`
  grid-area: 6 / 4 / 3 / 1;
  background-color: aquamarine;
  margin: 0 -0.5rem -0.5rem;
`;
