import { useEffect, useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

import Cardlist from "../components/Cardlist";
import Button from "../components/Button";
import ResetIcon from "../components/icons/ResetIcon";

import Form from "../components/Form";

// States:

export default function Home({ cardsToShow, handleResult, handleView, settings, handleAddNewWord, playNewGame, playedIds }) {
 






  return (
    <>
      <Form handleAddNewWord={handleAddNewWord} />
      {cardsToShow.length > 0 ? (
        <Cardlist
          cardsToShow={cardsToShow}
          handleResult={handleResult}
          handleView={handleView}
        />
      ) : playedIds.length > 0 ? (
        <Container>
          <Button
            text="Play again"
            onClick={playNewGame}
            icon={ResetIcon}
            large
          />
        </Container>
      ) : (
        <Container>
          <p>
            You got it 🚀!!! Please define some new vocabularies to go on
            learning.
          </p>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem;
`;
