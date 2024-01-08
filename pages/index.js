import styled from "styled-components";
import Cardlist from "../components/Cardlist";
import Button from "../components/Button";
import Form from "../components/Form";

export default function Home({
  cardsToShow,
  handleResult,
  handleView,
  handleAddNewWord,
  playNewGame,
  playedIds,
}) {
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
            iconVariant="reset"
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
