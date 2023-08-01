import styled from "styled-components";

export default function Header() {
  return <StyledHeader>Voc-Trainer</StyledHeader>;
}

const StyledHeader = styled.header`
  text-align: center;
  font-size: 2rem;
  position: fixed;
  top: 0;
  background-color: #ddd;
  left: 0;
  right: 0;

`;
