function handleSubmit(event) {
  event.preventDefault();
  console.log("submit clicked");
}

export default function Form({ handleAddNewWord }) {
  function handleSubmit(event) {
    event.preventDefault();
    handleAddNewWord(
      event.target.elements.word.value,
      event.target.elements.translation.value
    );
    event.target.reset();
    event.target.elements.word.focus();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="word"
        placeholder="...some word"
        type="text"
        aria-label="word input"
      />
      <input
        name="translation"
        placeholder="...translation"
        type="text"
        aria-label="translation input"
      />
      <button aria-label="submit" type="submit">
        ＋
      </button>
    </form>
  );
}
