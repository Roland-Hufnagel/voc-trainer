import WordsForm from "../../components/WordsForm";

export default function WordsPage({ cards, setCards }) {
  return (
    <ul>
      {cards.map((card) => (
        <WordsForm key={card.id} card={card} />
      ))}
    </ul>
  );
}
