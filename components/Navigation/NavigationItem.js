import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Icon from "../Icon";

export default function NavigationItem({ path, pageName, iconVariant }) {
  const { pathname } = useRouter();

  return (
    <StyledListElement isActive={pathname === path}>
      <StyledLink href={path}>
        <Icon variant={iconVariant} size="25"  />
        <p>{pageName}</p>
      </StyledLink>
    </StyledListElement>
  );
}

const StyledListElement = styled.li`
  all: unset;
  flex: 1;
  padding: 1rem;
  background-color: ${({ isActive }) =>
    isActive ? "var(--gray-light)" : "none"};
  color: ${({ isActive }) =>
    isActive ? "var(--link-active)" : "var(--link-inactive)"};
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: var(--gray-98);
  }

  svg {
    fill: ${({ isActive }) =>
      isActive ? "var(--link-active)" : "var(--link-inactive)"};
  }

  p {
    font-family: var(--fontfamily-special);
    padding-top: 0.5rem;
    font-size: 0.8rem;
  }
`;

const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;
  display: grid;
  justify-items: center;
  align-items: center;
  align-content: center;
  height: 100%;
`;
