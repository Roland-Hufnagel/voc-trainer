import styled from "styled-components";
import { useState } from "react";
import iconArrowRight from "../public/assets/voc-trainer_icon_arrow-right.svg";
import iconEye from "../public/assets/voc-trainer_icon_eye.png";
import iconCheckmark from "../public/assets/voc-trainer_icon_checkmark.png";
import iconCross from "../public/assets/voc-trainer_icon_cross.png";

import Image from "next/image";

export default function Card({ voc, handleResult, handleView, cardColor }) {
  const [showTranslation, setShowTranslation] = useState(false);
  const [isRated, setIsRated] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  function handleSliderClick() {
    setShowTranslation(!showTranslation);
    handleView(voc.id);
  }

  function handleRateClick(answeredCorrect) {
    setIsCorrect(answeredCorrect);
    setIsRated(true);
    handleResult(voc.id, answeredCorrect);
  }

  return (
    <StyledCard isRated={isRated} isCorrect={isCorrect}>
      <Word>{voc.word}</Word>
      <ViewsCount aria-label="Number of views:">
        <ViewsIcon>
          <Image src={iconEye} alt="Eye icon" width="18" />
        </ViewsIcon>
        {voc.views}
      </ViewsCount>
      <HitsCount aria-label="Number of hits:">
        <HitsIcon>
          <Image src={iconCheckmark} alt="Checkmark icon" width="16" />
        </HitsIcon>
        {voc.hits}
      </HitsCount>
      <HorizontalLine />
      <Translation
        showTranslation={showTranslation}
        aria-hidden={!showTranslation}
      >
        {voc.translation}
      </Translation>
      {!isRated && (
        <>
          <WrongButton
            onClick={() => handleRateClick(false)}
            aria-label="Mark as wrong"
            type="button"
          >
            <Image src={iconCross} alt="Cross icon" width="18" />
          </WrongButton>
          <CorrectButton
            onClick={() => handleRateClick(true)}
            aria-label="Mark as correct"
            type="button"
          >
            <Image src={iconCheckmark} alt="Checkmark icon" width="25" />
          </CorrectButton>
        </>
      )}

      <Slider
        onClick={handleSliderClick}
        cardColor={cardColor}
        aria-label="Show translation"
        showTranslation={showTranslation}
        type="button"
      >
        <Image src={iconArrowRight} alt="Right arrow" />
      </Slider>
    </StyledCard>
  );
}

const StyledCard = styled.li`
  background-color: ${({ isRated, isCorrect }) =>
    isRated ? (isCorrect ? transitionCorrect : transitionWrong) : "white"};
  color: var(--darktext);
  display: grid;
  grid-template-columns: 1fr 2rem 2rem;
  grid-template-rows: 1fr 1fr 1px 2fr;
  grid-template-areas:
    "word views views"
    "word hits hits"
    "hr hr hr"
    "translation wrong-button correct-button";
  border-radius: 0.25rem;
  margin: 1rem auto;
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

const ViewsIcon = styled.span`
  margin-right: 0.4rem;
`;

const ViewsCount = styled.p`
  grid-area: views;
  align-self: end;
  justify-self: end;
  padding-left: 0.5rem;
`;

const HitsIcon = styled.span`
  margin-right: 0.5rem;
`;

const HitsCount = styled.p`
  grid-area: hits;
  align-self: start;
  justify-self: end;
  padding-left: 0.5rem;
`;

const Translation = styled.p`
  grid-area: translation;
  align-self: center;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-right: 0.5rem;
  display: ${({ showTranslation }) => (showTranslation ? "block" : "none")};
`;

const WrongButton = styled.button`
  all: unset;
  grid-area: wrong-button;
  padding-top: 0.5rem;
  align-self: center;
  margin-top: -5px;
  cursor: pointer;
`;

const CorrectButton = styled.button`
  all: unset;
  grid-area: correct-button;
  align-self: center;
  justify-self: end;
  cursor: pointer;
`;

const HorizontalLine = styled.hr`
  all: unset;
  grid-area: hr;
  border-bottom: 1px solid var(--gray-light);
  width: 100%;
`;

const Slider = styled.button`
  all: unset;
  grid-area: 5 / 4 / 3 / 1;
  background-color: ${({ cardColor }) => cardColor};
  color: var(--white);
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0 -0.8rem -0.8rem;
  cursor: pointer;

  transition: transform 500ms cubic-bezier(0.15, 0.94, 1, 0.5);
  transform: ${({ showTranslation }) =>
    showTranslation ? "translateX(100%)" : ""};
`;

const transitionWrong = "red";

const transitionCorrect = "green";
