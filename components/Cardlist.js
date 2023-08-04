import styled from "styled-components";

export default function CardList({ children }) {
  return <StyledCardList>{children}</StyledCardList>;
}
const StyledCardList = styled.ul`
  all: unset;
  list-style: none;
`;
