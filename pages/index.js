import Header from "../components/Header";
import { vocs } from "../lib/db";
import Card from "../components/Card";
import styled from "styled-components";
import Cardlist from "../components/Cardlist";
import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

// States:
const cardsToPick = 5;
const hitsToWin = 3;

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
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, hits: card.hits + 1 } : card
      )
    );
  }

  function handleView(id) {
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
            {playCards.map((playCard) => (
              <Card
                key={playCard.id}
                voc={playCard}
                handleHit={handleHit}
                handleView={handleView}
                cardColor={"aquamarine"}
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
