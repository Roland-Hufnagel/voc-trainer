import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import { useRouter } from "next/router";

import Header from "../components/Header";
import Card from "../components/Card";
import Cardlist from "../components/Cardlist";
import { Button } from "../components/Button";

import { vocs } from "../lib/db";
import { accentColors } from "../styles";

// States:
const NUM_CARDS_TO_PICK = 5;
const HITS_TO_WIN = 3;

export default function Home() {
  const [cards, setCards] = useLocalStorageState("cards", {
    defaultValue: vocs,
  });
  const [playedIds, setPlayedIds] = useState([]);

  const router = useRouter();

  useEffect(() => {
    shuffleCards();
  }, []);

  // Shuffle all cards
  function shuffleCards() {
    setPlayedIds([]);
    setCards((prev) => prev.sort(() => 0.5 - Math.random()));
  }

  // Reduces the length of 'playCards' array to limit the amount of rendered cards.
  function limitCardsToShow(availableCards) {
    const numberOfCardsToShow = Math.max(
      0,
      NUM_CARDS_TO_PICK - playedIds.length
    );
    return availableCards.slice(0, numberOfCardsToShow);
  }

  // Adds card's ID zu playedCards Array and if answer is correct, increases a card's correct answer count by 1.
  function handleResult(id, answerIsCorrect) {
    setPlayedIds((prevPlayedIds) => [...prevPlayedIds, id]);

    if (answerIsCorrect) {
      setCards((prev) =>
        prev.map((card) =>
          card.id === id ? { ...card, hits: card.hits + 1 } : card
        )
      );
    }
  }

  // Increases a card's views counter by 1.
  function handleView(id) {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, views: card.views + 1 } : card
      )
    );
  }

  // Contains only the cards that have less "hits" than "HITS_TO_WIN"
  // and that have not yet been played in the session
  const availableCards = cards.filter((card) => {
    return card.hits < HITS_TO_WIN && !playedIds.includes(card.id);
  });

  const cardsToShow = limitCardsToShow(availableCards);

  return (
    <>
      <Header />
      <StyledMain>
        {cardsToShow.length > 0 ? (
          <Cardlist>
            {cardsToShow.map((cardToShow, index) => (
              <Card
                key={cardToShow.id}
                voc={cardToShow}
                handleResult={handleResult}
                handleView={handleView}
                cardColor={accentColors[index % accentColors.length]}
              />
            ))}
          </Cardlist>
        ) : playedIds.length > 0 ? (
          <Button
            type="button"
            onClick={() => {
              shuffleCards();
            }}
          >
            Play again?
          </Button>
        ) : (
          <p>You got it 🚀! Please define some new vocabularies to go on learning.</p>
        )}
      </StyledMain>
    </>
  );
}
const StyledMain = styled.main`
  margin-top: 4.5rem;
`;
