import styled from "styled-components";
import { useState } from "react";

export default function Card({ voc, handleHit, handleView, cardColor }) {
  const [showTranslation, setShowTranslation] = useState(false);
  const [wasClicked, setWasClicked] = useState(false);

  function handleSliderClick() {
    setShowTranslation(!showTranslation);
    handleView(voc.id);
  }

  function handleCorrectClick() {
    setWasClicked(true);
    handleHit(voc.id);
  }

  function handleWrongClick() {
    setWasClicked(true);
  }

  return (
    <StyledCard>
      <Word>{voc.word}</Word>
      <ViewsIcon>👁</ViewsIcon>
      <ViewsCount aria-label="Number of views:">{voc.views}</ViewsCount>
      <HitsIcon>✓</HitsIcon>
      <HitsCount aria-label="Number of hits:">{voc.hits}</HitsCount>
      <HorizontalLine />
      <Translation
        className={showTranslation ? "" : "hidden"}
        aria-hidden={!showTranslation}
      >
        {voc.translation}
      </Translation>
      {!wasClicked && (
        <>
          <WrongButton
            onClick={handleWrongClick}
            aria-label="Mark as incorrect"
          >
            ✕
          </WrongButton>
          <CorrectButton
            onClick={handleCorrectClick}
            aria-label="Mark as correct"
          >
            ✓
          </CorrectButton>
        </>
      )}

      <Slider
        className={showTranslation ? "active" : ""}
        onClick={handleSliderClick}
        cardColor={cardColor}
        aria-label="Show translation"
      >
        ➔
      </Slider>
    </StyledCard>
  );
}

const StyledCard = styled.li`
  background-color: white;
  color: var(--darktext);
  display: grid;
  grid-template-columns: 1fr 2rem 2rem;
  grid-template-rows: 1fr 1fr 1px 1fr 1fr;
  grid-template-areas:
    "word views-icon views-count"
    "word hits-icon hits-count"
    "hr hr hr"
    "translation . wrong-button"
    "translation . correct-button";
  border-radius: 0.25rem;
  margin: 0.7rem auto;
  padding: 0 0.8rem;
  height: 10rem;
  width: 15rem;
  overflow: hidden;
  box-shadow: var(--boxshadow-secondary);
`;

const Word = styled.p`
  grid-area: word;
  align-self: center;
  font-family: var(--fontfamily-special);
  font-size: 0.85rem;
  line-height: 1.4;
  margin-right: 0.5rem;
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

const Translation = styled.p`
  grid-area: translation;
  align-self: center;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-right: 0.5rem;

  &.hidden {
    display: none;
  }
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
  border-bottom: 1px solid var(--gray-light);
  width: 100%;
`;

const Slider = styled.div`
  grid-area: 6 / 4 / 3 / 1;
  background-color: ${props => props.cardColor};
  color: var(--white);
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0 -0.8rem -0.8rem;

  transition: transform 700ms ease-in-out;

  &.active {
    transform: translateX(100%);
  }
`;
