import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";

import Header from "../components/Header";
import Card from "../components/Card";
import Cardlist from "../components/Cardlist";

import { vocs } from "../lib/db";
import { accentColors } from "../styles";

// States:
const cardsToPick = 10;
const hitsToWin = 3;
const cardColors = generateCardColors(accentColors); // Are defined in styles.js

function generateCardColors(colorArray) {
  // Modifies the given color values ​​to appear like an infinite gradient. Returns an array of color values.
  return [
    ...colorArray,
    ...colorArray.slice(1, colorArray.length - 1).reverse(),
  ];
}

function assignCardColor(allCardColors, cardIndex) {
  // Assigns the appropriate color to the component based on its position.
  const colorIndex = cardIndex % allCardColors.length;
  return allCardColors[colorIndex];
}

export default function Home() {
  const [cards, setCards] = useLocalStorageState("cards", {
    defaultValue: vocs,
  });

  // Derived from States:
  const playCards = [...cards.filter((card) => card.hits < hitsToWin)];
  playCards.length =
    cardsToPick > playCards.length ? playCards.length : cardsToPick;

  function shuffleCards() {
    setCards((prev) => prev.sort(() => 0.5 - Math.random()));
  }

  function handleHit(id) {
    // Increases a card's correct answer count by 1.
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, hits: card.hits + 1 } : card
      )
    );
  }

  function handleView(id) {
    // Increases the number of times the translation has been revealed by 1.
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, views: card.views + 1 } : card
      )
    );
  }

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <>
      <Header />
      <StyledMain>
        {playCards.length > 0 ? (
          <Cardlist>
            {playCards.map((playCard, index) => (
              <Card
                key={playCard.id}
                voc={playCard}
                handleHit={handleHit}
                handleView={handleView}
                cardColor={assignCardColor(cardColors, index)}
              />
            ))}
          </Cardlist>
        ) : (
          <p>No vocabularies to learn. Please define some.</p>
        )}
      </StyledMain>
    </>
  );
}
const StyledMain = styled.main`
  margin-top: 2.5rem;
`;
