import styled from "styled-components";
import { Button } from "./Button";

export default function Card({ voc }) {
  return (
    <StyledSection>
      <p>{voc.word}</p>
      <Button>Show answer</Button>
    </StyledSection>
  );
}

const StyledSection = styled.li`
  border: 2px solid #ddd;
  border-radius: 0.5rem;
  margin: 0.7rem auto;
  height: 100px;
  max-width: 200px;
  text-align: center;
`;
