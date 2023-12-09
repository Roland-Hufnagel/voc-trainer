import styled from "styled-components";
import Header from "./Header";
import NavigationBar from "./Navigation/NavigationBar";

function Layout({ success, children }) {
  return (
    <AppContainer>
      <Header success={success} />
      <StyledMain>{children}</StyledMain>
      <NavigationBar />
    </AppContainer>
  );
}

export default Layout;

const AppContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 3.6rem 1fr 5rem;
`;
const StyledMain = styled.main`
  overflow-y: auto;
  padding: 0.5rem;
`;
