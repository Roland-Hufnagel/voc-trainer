import styled from "styled-components";
import NavigationItem from "./NavigationItem";


export default function NavigationBar() {
  return (
    <nav>
      <NavigationItems>
        <NavigationItem
          path="/"
          pageName="Home"
          iconVariant="home"
        />
        <NavigationItem
          path="/words"
          pageName="Words"
          iconVariant="words"
        />
        <NavigationItem
          path="/dashboard"
          pageName="Dashboard"
          iconVariant="dashboard"
        />
      </NavigationItems>
    </nav>
  );
}

const NavigationItems = styled.ul`
  display: flex;
  align-items: stretch;
  background-color: var(--white);
  width: 100%;
  box-shadow: var(--boxshadow-primary);
`;
