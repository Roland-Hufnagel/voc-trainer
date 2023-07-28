import Header from "../components/Header";
import { vocs } from "../lib/db";
import Card from "../components/Card";
import styled from "styled-components";
import Cardlist from "../components/Cardlist";
import { useState, useEffect } from "react";

function pickXRandomCards(amountToPick, allCards) {
  const shuffledCards = allCards.sort(() => 0.5 - Math.random());
  return shuffledCards.slice(0, amountToPick);
}

export default function Home() {
  const [playCards, setPlayCards] = useState([]);
  useEffect(() => {
    setPlayCards(pickXRandomCards(5, vocs));
  }, []);
  
  return (
    <>
      <Header />
      <StyledMain>
        {vocs.length > 0 ? (
          <Cardlist>
            {playCards.map((card) => {
              return <Card key={card.id} voc={card}></Card>;
            })}
          </Cardlist>
        ) : (
          <p>No vocabularies available. Please start defining them.</p>
        )}
      </StyledMain>
    </>
  );
}
const StyledMain = styled.main`
  margin-top: 2.5rem;
`;
