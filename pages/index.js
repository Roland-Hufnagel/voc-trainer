import Header from "../components/Header";
import { vocs } from "../lib/db";
import Card from "../components/Card";
import styled from "styled-components";
import Cardlist from "../components/Cardlist";
import { useState, useEffect } from "react";

function getXRandomIndexes(x, max) {// max ist maximaler Index!
  if (max < 0) {
    alert("Keine Vokabeln vorhanden!");
  }
  if (max < x) {
    x = max - 1;
  }

  const arr = [];
  while (arr.length <= x) {
    const randomNumber = Math.floor(Math.random() * (max + 1));
    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber);
    }
  }
  console.log(arr);
  return arr;
}

export default function Home() {
  const [cards, setCards] = useState(vocs);
  const [indexes, setIndexes] = useState([]);
  useEffect(() => {
    setIndexes(getXRandomIndexes(3, cards.length - 1));
  }, []);

  return (
    <>
      <Header />
      <StyledMain>
        <Cardlist>
          {indexes.map((item) => {
            return <Card key={item} voc={cards[item]}></Card>;
          })}
        </Cardlist>
      </StyledMain>
    </>
  );
}
const StyledMain = styled.main`
  margin-top: 2.5rem;
`;
