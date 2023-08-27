import styled from "styled-components";
import Header from "./Header";
import NavigationBar from "./Navigation/NavigationBar";

function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <NavigationBar />
    </>
  );
}

export default Layout;

const StyledMain = styled.main`
  margin: 5rem auto 6rem auto;
`;
