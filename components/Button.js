import styled, { css } from "styled-components";

const SMALL_ICON_SIZE = "20";
const LARGE_ICON_SIZE = "28";

export default function Button({ text, onClick, icon: Icon, large, type = "button"}) {
  const iconSize = large ? LARGE_ICON_SIZE : SMALL_ICON_SIZE;

  return (
    <StyledButton onClick={onClick} large={large} type={type}>
      {Icon && <Icon width={iconSize} />}
      <span>{text}</span>
    </StyledButton>
  );
}

const buttonStyles = css`
  font-size: 0.9rem;
  padding: 0.35rem 0.75rem;
  border-width: 2px;
  gap: 0.5rem;
`;

const largeButtonStyles = css`
  font-size: 1.3rem;
  padding: 0.7rem 1.3rem;
  border-width: 2px;
  gap: 0.7rem;
`;

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  height: 1.35rem;
  display: inline-flex;
  align-items: center;
  border: solid var(--button);
  border-radius: 5px;
  background-color: var(--white);
  color: var(--button);
  transition: 0.3s ease;

  svg {
    fill: var(--button);
    transition: 0.3s ease;
  }

  &:hover {
    color: var(--button-hover);
    border: 2px solid var(--button-hover);
  }

  &:hover svg {
    fill: var(--button-hover);
  }

  ${(props) => (props.large ? largeButtonStyles : buttonStyles)}
`;

export { Button };
