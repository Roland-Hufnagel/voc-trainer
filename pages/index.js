import Header from "../components/Header";
import { vocs } from "../lib/db";
import Card from "../components/Card";
import styled from "styled-components";
import Cardlist from "../components/Cardlist";
export default function Home() {
  return (
    <>
      <Header />
      <StyledMain>
        <Cardlist>
          {vocs.map((voc) => {
            return <Card key={voc.id} voc={voc}></Card>;
          })}
        </Cardlist>
      </StyledMain>
    </>
  );
}
const StyledMain = styled.main`
  margin-top: 2.5rem;
`;
