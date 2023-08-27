import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function NavigationItem({ path, pageName }) {
  const { pathname } = useRouter();

  return (
    <StyledNavigationItem isActive={pathname === path}>
      <Link href={path}>{pageName}</Link>
    </StyledNavigationItem>
  );
}

const StyledNavigationItem = styled.li`
  all: unset;
  background-color: ${({ isActive }) =>
    isActive ? "var(--gray-light)" : "none"};
  padding: 0.75rem 1rem;
`;
