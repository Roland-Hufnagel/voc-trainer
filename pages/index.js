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
  const [indexes, setIndexes] = useState([]);
  useEffect(() => {
    setIndexes(getXRandomIndexes(5, vocs.length));
  }, []);

  return (
    <>
      <Header />
      <StyledMain>
        {vocs.length > 0 ? (
          <Cardlist>
            {indexes.map((index) => {
              return <Card key={index} voc={vocs[index]}></Card>;
            })}
          </Cardlist>
        ) : (
          <p>no vocabularies available. Please start defining them.</p>
        )}
      </StyledMain>
    </>
  );
}
const StyledMain = styled.main`
  margin-top: 2.5rem;
`;
