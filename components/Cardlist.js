import styled from "styled-components";

export default function Cardlist({ children }) {
  return <StyledCardList>{children}</StyledCardList>;
}
const StyledCardList = styled.ul`
  list-style: none;
`;
