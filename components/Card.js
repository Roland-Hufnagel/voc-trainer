import styled from "styled-components";

export default function card({ voc }) {
  return (
    <>
      <StyledSection>
        <p>{voc.word}</p>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  border: 2px solid #ddd;
  border-radius: 5px;
  margin: 10px auto;
  height: 110px;
  max-width: 200px;
  text-align: center;
`;
