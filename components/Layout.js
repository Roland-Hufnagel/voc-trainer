import styled from "styled-components";
import Header from "./Header";
import NavigationBar from "./Navigation/NavigationBar";

function Layout({ countFinished, countInProgress, countTotal, children }) {
  return (
    <AppContainer>
      <Header
        countFinished={countFinished}
        countTotal={countTotal}
        countInProgress={countInProgress}
      />
      <StyledMain>{children}</StyledMain>
      <NavigationBar />
    </AppContainer>
  );
}

export default Layout;
const AppContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 3.8rem 1fr 5rem;
`;
const StyledMain = styled.main`
  overflow-y: auto;
  padding: 0.5rem;
`;
