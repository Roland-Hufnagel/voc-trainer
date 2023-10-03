import WordsCard from "../../components/WordsCard";
import EditWordForm from "../../components/EditWordForm";

export default function WordsPage({
  cards,
  handleChangeCard,
  handleDeleteCard,
}) {
  return (
    <ul>
      {cards.map((card) => (
        <WordsCard
          key={card.id}
          card={card}
          handleChangeCard={handleChangeCard}
          handleDeleteCard={handleDeleteCard}
        />
      ))}
    </ul>
  );
}
