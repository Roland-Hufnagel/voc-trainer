import { useState } from "react";
import WordsCard from "../../components/WordsCard";
import Fuse from "fuse.js";
import styled from "styled-components";

export default function WordsPage({
  cards,
  handleChangeCard,
  handleDeleteCard,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const fuseOptions = {
    keys: ["word", "translation"],
    threshold: 0.3,
  };

  const fuse = new Fuse(cards, fuseOptions);
  const results = fuse.search(searchTerm);

  const filteredCards = searchTerm
    ? results.map((result) => result.item)
    : cards;

  return (
    <Wrapper>
      <StyledInput
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="search..."
      />
      <ul>
        {filteredCards.map((card) => (
          <WordsCard
            key={card.id}
            card={card}
            handleChangeCard={handleChangeCard}
            handleDeleteCard={handleDeleteCard}
          />
        ))}
      </ul>
    </Wrapper>
  );
}
const StyledInput = styled.input`
  line-height: 2rem;
  border-radius: 0.5rem;
  margin: 0.2rem;
  padding: 0.2rem 0.4rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
