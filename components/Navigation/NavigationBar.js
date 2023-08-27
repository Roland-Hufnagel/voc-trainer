import styled from "styled-components";
import NavigationItem from "./NavigationItem";

export default function NavigationBar() {
  return (
    <nav>
      <StyledNavigation>
        <NavigationItem path={"/"} pageName={"home"} />
        <NavigationItem path={"/words"} pageName={"words"} />
        <NavigationItem path={"/dashboard"} pageName={"dashboard"} />
      </StyledNavigation>
    </nav>
  );
}

const StyledNavigation = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1rem;
  position: fixed;
  bottom: 0;
  background-color: var(--white);
  width: 100%;
  padding: 0.75rem;
  box-shadow: var(--boxshadow-primary);
`;
