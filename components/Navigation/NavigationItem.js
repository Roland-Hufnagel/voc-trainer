import Link from "next/link";
import styled from "styled-components";

export default function NavigationItem({ path, pageName }) {
  return (
    <StyledNavigationItem>
      <Link href={path}>{pageName}</Link>
    </StyledNavigationItem>
  );
}

const StyledNavigationItem = styled.li`
  all: unset;
`;
