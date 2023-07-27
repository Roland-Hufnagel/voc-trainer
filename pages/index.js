import Header from "../components/Header";
import { vocs } from "../lib/db";
import Card from "../components/Card";
import styled from "styled-components";
import Cardlist from "../components/Cardlist";
import { useState, useEffect } from "react";

function getXRandomIndexes(x, length) {
  // x => how many cards you want
  // length => how many cards there are

  if (x > length) {
    x = length;
  }
  const maxIndex = length - 1;
  const arr = [];
  while (arr.length < x) {
    const randomNumber = Math.floor(Math.random() * (maxIndex + 1));
    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber);
    }
  }
  return arr;
}

export default function Home() {
  const [cards, setCards] = useState(vocs);
  const [indexes, setIndexes] = useState([]);
  useEffect(() => {
    setIndexes(getXRandomIndexes(5, cards.length));
  }, []);

  return (
    <>
      <Header />
      <StyledMain>
        {cards.length > 0 ? (
          <Cardlist>
            {indexes.map((item) => {
              return <Card key={item} voc={cards[item]}></Card>;
            })}
          </Cardlist>
        ) : (
          <p>Keine Vokabeln vorhanden</p>
        )}
      </StyledMain>
    </>
  );
}
const StyledMain = styled.main`
  margin-top: 2.5rem;
`;
