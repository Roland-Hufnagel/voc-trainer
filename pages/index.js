import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import { nanoid } from "nanoid";

import Header from "../components/Header";
import Card from "../components/Card";
import Cardlist from "../components/Cardlist";

import { vocs } from "../lib/db";
import { accentColors } from "../styles";
import Form from "../components/Form";

// States:
const cardsToPick = 4;
const hitsToWin = 3;

export default function Home() {
  const [cards, setCards] = useLocalStorageState("cards", {
    defaultValue: vocs,
  });

  function handleAddNewWord(word, translation) {
    setCards((prev) => [
      ...prev,
      { id: nanoid(), word, translation, hits: 0, views: 0 },
    ]);
  }

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
        <Form handleAddNewWord={handleAddNewWord} />
        {playCards.length > 0 ? (
          <Cardlist>
            {playCards.map((playCard, index) => (
              <Card
                key={playCard.id}
                voc={playCard}
                handleHit={handleHit}
                handleView={handleView}
                cardColor={accentColors[index % accentColors.length]}
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
  //margin: 0 auto;
`;
