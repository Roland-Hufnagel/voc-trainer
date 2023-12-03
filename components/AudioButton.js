import styled from "styled-components";
import PlaySoundIcon from "./icons/PlaySoundIcon";

export default function AudioButton({ audioLinks }) {
  const selectedAudio = getPreferredPronunciation(audioLinks);

  function getPreferredPronunciation(links) {
    const ukPronunciation = links.find((link) => link.countryCode === "UK");

    return ukPronunciation
      ? ukPronunciation
      : links[Math.floor(Math.random() * links.length)];
  }

  function playAudio() {
    const audio = new Audio(selectedAudio.url);
    audio.play();
  }

  return (
    <ButtonWrapper>
      <PlayButton onClick={playAudio}>
        <PlaySoundIcon width={22} />
      </PlayButton>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
`;

const PlayButton = styled.button`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease;

  svg {
    fill: var(--link-active);
    transition: 0.3s ease;
  }

  &:hover {
    background-color: var(--gray-light);
  }
`;

const DropdownButton = styled.button`
  background-color: ${({ dropdownColor }) => dropdownColor};
  position: absolute;
  bottom: -1px;
  right: 3px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: none;
  width: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: var(--gray-light);
    transition: 0.3s ease;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  left: 1.4rem;
  list-style-type: none;
  padding: 0;
  margin: 0;
  border-radius: var(--border-radius);
  background-color: white;
  box-shadow: var(--boxshadow-primary);
`;

const DropdownItem = styled.li`
  font-size: 0.7rem;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${({ isSelected, selectedColor }) =>
    isSelected
      ? `color-mix(in HSL, ${selectedColor} 50%, white 0%)`
      : "transparent"};

  &:hover {
    background-color: #f7f7f7;
  }
`;
