import styled from "styled-components";
import { ImCancelCircle } from "react-icons/im";

export default function Modal({ handleClose, children }) {
  return (
    <Background onClick={handleClose} aria-label="close modal">
      <CloseButton aria-label="close modal">
        <ImCancelCircle size="30" />
      </CloseButton>
      <Foreground onClick={(event) => event.stopPropagation()}>{children}</Foreground>
    </Background>
  );
}
const CloseButton = styled.button`
  all: unset;
  position: absolute;
  top: 20px;
  right: 20px;
  &:hover {
    cursor: pointer;
  }
`;
const Background = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const Foreground = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: var(--boxshadow-primary);
`;
