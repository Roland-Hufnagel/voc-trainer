import styled from "styled-components";
import NavigationItem from "./NavigationItem";

export default function NavigationBar() {
  return (
    <nav>
      <StyledNavigationItems>
        <NavigationItem path={"/"} pageName={"home"} />
        <NavigationItem path={"/words"} pageName={"words"} />
        <NavigationItem path={"/dashboard"} pageName={"dashboard"} />
      </StyledNavigationItems>
    </nav>
  );
}

const StyledNavigationItems = styled.ul`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  background-color: var(--white);
  width: 100%;
  box-shadow: var(--boxshadow-primary);
`;
