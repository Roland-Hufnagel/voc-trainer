import styled from "styled-components";
import iconCheckmark from "../public/assets/voc-trainer_icon_checkmark.png";
import iconEye from "../public/assets/voc-trainer_icon_eye.png";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import ResetIcon from "./icons/ResetIcon";
import CancelIcon from "./icons/CancelIcon";
import SaveIcon from "./icons/SaveIcon";

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
        <Image src={iconEye} alt="Eye icon" width="18" />
        <span>{views}</span>
        <Image src={iconCheckmark} alt="Checkmark icon" width="18" />
        <span>{hits}</span>
        <Button
          text="Reset"
          onClick={() => {
            setHits(0);
            setViews(0);
          }}
          icon={ResetIcon}
        />
      </Container>
      <hr />
      <Container>
        <Button text="Cancel" onClick={handleClose} icon={CancelIcon} />
        <Button text="Save" type="submit" icon={SaveIcon} />
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
