import styled from "styled-components";

export default function Form({ handleAddNewWord }) {
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
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        name="word"
        placeholder="...some word"
        type="text"
        aria-label="Enter a new word"
      />
      <StyledInput
        name="translation"
        placeholder="...translation"
        type="text"
        aria-label="Enter the translation"
      />
      <StyledButton aria-label="Add word to your vocabulary" type="submit">
        ＋
      </StyledButton>
    </StyledForm>
  );
}
const StyledForm = styled.form`
display: flex;
justify-content: center;
`;
const StyledButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  margin: 0.2rem;
`;
const StyledInput = styled.input`
  line-height: 2rem;
  border-radius: 0.5rem;
  margin: 0.2rem;
  padding: 0.2rem 0.4rem;
`;
