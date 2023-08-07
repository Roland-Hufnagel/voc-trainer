import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";

import Header from "../components/Header";
import Card from "../components/Card";
import Cardlist from "../components/Cardlist";

import { vocs } from "../lib/db";
import { accentColors } from "../styles";

// States:
const cardsToPick = 5;
const hitsToWin = 3;

export default function Home() {
  const [cards, setCards] = useLocalStorageState("cards", {
    defaultValue: vocs,
  });
  const [playedIds, setPlayedIds] = useState([]);

  // Shuffle the cards
  function shuffleCards() {
    setCards((prev) => prev.sort(() => 0.5 - Math.random()));
  }

  // Derived from States:
  const playCards = [
    ...cards.filter((card) => {
      return card.hits < hitsToWin && !playedIds.includes(card.id);
    }),
  ];

  // Reduces the length of 'playCards' array to limit the amount of rendered cards.
  (function limitCardsToShow() {
    const amountofPlayCards = playCards.length;
    const amountOfCardsToShow = Math.max(0, cardsToPick - playedIds.length);

    if (amountofPlayCards > amountOfCardsToShow) {
      playCards.length = amountOfCardsToShow;
    }
  })();

  function handleResult(id, answerIsCorrect) {
    // Adds card's ID zu playedCards Array. If correct, increases a card's correct answer count by 1.
    if (answerIsCorrect) {
      setCards((prev) =>
        prev.map((card) =>
          card.id === id ? { ...card, hits: card.hits + 1 } : card
        )
      );
    } else {
      console.log("Loser!");
    }
    setPlayedIds((prevIds) => [...prevIds, id]);
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
                handleResult={handleResult}
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
  margin-top: 4.5rem;
`;
