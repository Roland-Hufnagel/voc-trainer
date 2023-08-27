import styled from "styled-components";
import NavigationItem from "./NavigationItem";
import HomeIcon from "../icons/HomeIcon";
import WordsIcon from "../icons/WordsIcon";
import DashboardIcon from "../icons/DashboardIcon";

export default function NavigationBar() {
  return (
    <nav>
      <StyledNavigationItems>
        <NavigationItem
          path={"/"}
          pageName={"Home"}
          icon={<HomeIcon width="1.5rem" height="1.5rem" />}
        />
        <NavigationItem
          path={"/words"}
          pageName={"Words"}
          icon={<WordsIcon width="1.5rem" height="1.5rem" />}
        />
        <NavigationItem
          path={"/dashboard"}
          pageName={"Dashboard"}
          icon={<DashboardIcon width="1.5rem" height="1.5rem" />}
        />
      </StyledNavigationItems>
    </nav>
  );
}

const StyledNavigationItems = styled.ul`
  display: flex;
  align-items: stretch;
  position: fixed;
  bottom: 0;
  background-color: var(--white);
  width: 100%;
  box-shadow: var(--boxshadow-primary);
`;
