import styled from "styled-components";

export default function CardList({ children }) {
  return <StyledCardList>{children}</StyledCardList>;
}
const StyledCardList = styled.ul`
  list-style: none;
`;
