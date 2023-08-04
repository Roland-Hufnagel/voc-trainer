import styled from "styled-components";
import { useState } from "react";
import { Button } from "./Button";

export default function Card({ voc, handleHit, handleView }) {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <StyledCard>
      <Word>Word</Word>
      <ViewsIcon>View-icon</ViewsIcon>
      <ViewsCount>View-count</ViewsCount>
      <CorrectsIcon>Correct Icon</CorrectsIcon>
      <CorrectsCount>Correct count</CorrectsCount>
      <Translation>Translation</Translation>
      <WrongButton>Wrong Button</WrongButton>
      <CorrectButton>Correct Button</CorrectButton>
      {/* <p>
        {voc.word} {voc.views} {voc.hits}
        {showTranslation && `\n = \n ${voc.translation}`}
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
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "word views-icon views-count"
    "word corrects-icon corrects-count"
    "translation . wrong-button"
    "translation . correct-button";
  border: 2px solid #ddd;
  border-radius: 0.5rem;
  margin: 0.7rem auto;
  height: 10rem;
  width: 15rem;

`;

const Word = styled.div`
grid-area: word;
background-color: red;
`

const ViewsIcon = styled.div`
grid-area: views-icon;
background-color: blue;
`

const ViewsCount = styled.div`
grid-area: views-count;
background-color: green;
`

const CorrectsIcon = styled.div`
grid-area: corrects-icon;
background-color: yellow;
`

const CorrectsCount = styled.div`
grid-area: corrects-count;
background-color: orange;
`

const Translation = styled.div`
grid-area: translation;
background-color: purple;
`

const WrongButton = styled.div`
grid-area: wrong-button;
background-color: purple;
`

const CorrectButton = styled.div`
grid-area: correct-button;
background-color: brown;
`