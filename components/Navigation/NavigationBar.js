import styled from "styled-components";

import NavigationItem from "./NavigationItem";
import HomeIcon from "../icons/HomeIcon";
import WordsIcon from "../icons/WordsIcon";
import DashboardIcon from "../icons/DashboardIcon";

const ICON_WIDTH = "1.5rem";

export default function NavigationBar() {
  return (
    <nav>
      <NavigationItems>
        <NavigationItem
          path="/"
          pageName="Home"
          icon={<HomeIcon width={ICON_WIDTH} />}
        />
        <NavigationItem
          path="/words"
          pageName="Words"
          icon={<WordsIcon width={ICON_WIDTH} />}
        />
        <NavigationItem
          path="/dashboard"
          pageName="Dashboard"
          icon={<DashboardIcon width={ICON_WIDTH} />}
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
