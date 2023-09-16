import styled from "styled-components";

export default function Button({ text, onClick, icon, large, primary }) {
  const Icon = icon;
  const iconSize = large ? "40" : "20";

  return (
    <StyledButton onClick={onClick} primary={primary}>
      {icon && <Icon width={iconSize} />}
      <span>{text}</span>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  border: 2px solid var(--link-active);
  border-radius: 5px;
  padding: 0.75rem;
  background-color: var(--white);
  color: var(--link-active);
  font-size: 0.9rem;
  transition: 0.3s ease;

  svg {
    fill: var(--link-active);
    transition: fill 0.3s ease;
  }

  &:hover {
    color: var(--link-inactive);
    border: 2px solid var(--link-inactive);
  }

  &:hover svg {
    fill: var(--link-inactive);
  }
`;

export { Button };
