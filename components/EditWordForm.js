import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";
import Icon from "./Icon";

export default function EditWordForm({ card, handleChangeCard, handleClose }) {
  const [views, setViews] = useState(card.views);
  const [hits, setHits] = useState(card.hits);

  function handleSubmit(event) {
    event.preventDefault();
    handleChangeCard({
      ...card,
      word: event.target.word.value,
      translation: event.target.translation.value,
      views: views,
      hits: hits,
    });
    handleClose();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput defaultValue={card.word} name="word" />
      <StyledInput defaultValue={card.translation} name="translation" />
      <Container>
        <Icon variant="views" size={20} />
        <span>{views}</span>
        <Icon variant="checkmarkSmall" size={16} />
        <span>{hits}</span>
        <Button
          text="Reset"
          onClick={() => {
            setHits(0);
            setViews(0);
          }}
          iconVariant="reset"
        />
      </Container>
      <hr />
      <Container>
        <Button text="Cancel" onClick={handleClose} iconVariant="cancel" />
        <Button text="Save" type="submit" iconVariant="checkmark" />
      </Container>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 0.5em;
`;
const StyledInput = styled.input`
  line-height: 2em;
  border-radius: 0.5rem;
  padding: 0.2rem 0.4rem;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.9em;
  padding: 0 0.2em;
`;
