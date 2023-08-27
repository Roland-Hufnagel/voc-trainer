import { useEffect, useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

import Header from "../components/Header";
import Cardlist from "../components/Cardlist";
import { Button } from "../components/Button";

import Form from "../components/Form";

// States:
const NUM_CARDS_TO_PICK = 3;
const HITS_TO_WIN = 3;

export default function Home({ cards, setCards }) {
  const [playedIds, setPlayedIds] = useState([]);

  function handleAddNewWord(word, translation) {
    setCards((prev) => [
      ...prev,
      { id: nanoid(), word, translation, hits: 0, views: 0 },
    ]);
  }

  useEffect(() => {
    shuffleCards();
  }, []);

  // Shuffle all cards
  function shuffleCards() {
    setCards((prev) => prev.sort(() => 0.5 - Math.random()));
  }

  // Reduces the length of 'playCards' array to limit the amount of rendered cards.
  function limitCardsToShow(availableCards) {
    const numberOfCardsToShow = NUM_CARDS_TO_PICK - playedIds.length;
    return availableCards.slice(0, numberOfCardsToShow);
  }

  // Adds card's ID zu playedCards Array and if answer is correct, increases a card's correct answer count by 1.
  function handleResult(id, answerIsCorrect) {
    setTimeout(() => {
      setPlayedIds((prevPlayedIds) => [...prevPlayedIds, id]);
      if (answerIsCorrect) {
        setCards((prev) =>
          prev.map((card) =>
            card.id === id ? { ...card, hits: card.hits + 1 } : card
          )
        );
      }
    }, 800);
  }

  // Increases a card's views counter by 1.
  function handleView(id) {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, views: card.views + 1 } : card
      )
    );
  }

  // Starts a new game
  function playNewGame() {
    setPlayedIds([]);
    shuffleCards();
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
        <Form handleAddNewWord={handleAddNewWord} />
        {cardsToShow.length > 0 ? (
          <Cardlist
            cardsToShow={cardsToShow}
            handleResult={handleResult}
            handleView={handleView}
          />
        ) : playedIds.length > 0 ? (
          <Container>
            <Button type="button" onClick={playNewGame}>
              Play again?
            </Button>
          </Container>
        ) : (
          <Container>
            <p>
              You got it 🚀!!! Please define some new vocabularies to go on
              learning.
            </p>
          </Container>
        )}
      </StyledMain>
    </>
  );
}
const StyledMain = styled.main``;
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem;
`;
