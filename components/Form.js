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
        aria-label="Enter a new word"
      />
      <input
        name="translation"
        placeholder="...translation"
        type="text"
        aria-label="Enter the translation"
      />
      <button aria-label="Add word to your vocabulary" type="submit">
        ＋
      </button>
    </form>
  );
}
