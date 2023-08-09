
function handleSubmit(event) {
  event.preventDefault();
  console.log("submit clicked");
}

export default function Form() {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="word"
        placeholder="some word..."
        type="text"
        aria-label="word input"
      />
      <input
        name="translation"
        placeholder="translation"
        type="text"
        aria-label="translation input"
      />
      <button type="submit">＋</button>
    </form>
  );
}

