function handleSubmit(event) {
  event.preventDefault();
  console.log("submit clicked");
}

export default function Form({ handleAddWord }) {
  function handleSubmit(event) {
    console.log("---->", event.target.elements.translation.value);
    event.preventDefault();
    handleAddWord(
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
      <button type="submit">＋</button>
    </form>
  );
}
