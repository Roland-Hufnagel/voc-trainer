import styled from "styled-components";
import { useState } from "react";
import { Button } from "./Button";

export default function Card({ voc }) {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <StyledSection>
      <p style={{ whiteSpace: "pre" }}>
        {voc.word}
        {showTranslation && `\n = \n ${voc.translation}`}
      </p>
      {!showTranslation && (
        <Button
          onClick={() =>
            setShowTranslation(
              (previousShowTranslation) => !previousShowTranslation
            )
          }
        >
          Show answer
        </Button>
      )}
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
