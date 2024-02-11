import { useRef } from "react";
import styled from "styled-components";
import Icon from "./Icon";

export default function Form({ handleAddNewWord }) {
  const formRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    event.target.word.style.border = "2px solid black";
    event.target.translation.style.border = "2px solid black";
    const word = event.target.word.value;
    const translation = event.target.translation.value;
    if (word.trim() === "") {
      event.target.word.placeholder = "Add a word here";
      event.target.word.style.border = "2px solid red";
    } else if (translation.trim() === "") {
      event.target.translation.placeholder = "Add translation here";
      event.target.translation.style.border = "2px solid red";
    } else {
      handleAddNewWord(word, translation);
      event.target.reset();
      event.target.word.focus();
    }
  }
  async function getTranslation() {
    const response = await fetch("/api/deepl", {
      method: "POST",
      body: JSON.stringify(formRef.current.word.value),
    });
    if (response.ok) {
      const translation = await response.json();
      formRef.current.translation.value = JSON.parse(translation);
    } else {
      console.error("Something went wrong");
    }
  }
  return (
    <StyledForm onSubmit={handleSubmit} ref={formRef}>
      <InputContainer>
        <StyledInput
          name="word"
          placeholder="...some word"
          type="text"
          aria-label="Enter a new word"
          //onBlur={getTranslation}
        />
        <StyledButton
          aria-label="Get translation"
          type="button"
          onClick={getTranslation}
        >
          <Icon variant="arrowRight" size={20} />
        </StyledButton>
      </InputContainer>
      <InputContainer>
        <StyledInput
          name="translation"
          placeholder="...translation"
          type="text"
          aria-label="Enter the translation"
        />
        <StyledButton aria-label="Add word to your vocabulary" type="submit">
          <Icon variant="checkmarkBig" size={20} />
        </StyledButton>
      </InputContainer>
    </StyledForm>
  );
}
const InputContainer = styled.div`
  align-self: stretch;
  display: flex;
  gap: 0.3em;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 430px;
  gap: 0.3em;
  margin: 0 auto;
  @media (min-width: 430px) {
    flex-direction: row;
  }
`;
const StyledButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
`;
const StyledInput = styled.input`
  line-height: 2rem;
  border-radius: 0.5rem;
  padding: 0.2rem 0.4rem;
  width: 100%;
`;
