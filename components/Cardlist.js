import styled from "styled-components";
import Card from "./Card";
import { accentColors } from "../styles";

export default function CardList({ cardsToShow, handleView, handleResult }) {
  return (
    <StyledCardList>
      {cardsToShow.map((cardToShow, index) => (
        <Card
          key={cardToShow.id}
          voc={cardToShow}
          handleResult={handleResult}
          handleView={handleView}
          cardColor={accentColors[index % accentColors.length]}
        />
      ))}
    </StyledCardList>
  );
}
const StyledCardList = styled.ul`
  all: unset;
  list-style: none;
`;
