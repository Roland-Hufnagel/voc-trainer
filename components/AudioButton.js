import styled from "styled-components";
import PlaySoundIcon from "./icons/PlaySoundIcon";

export default function AudioButton({ audioLinks }) {
  const selectedAudio = getPreferredPronunciation(audioLinks);

  function getPreferredPronunciation(links) {
    const ukPronunciation = links.find((link) => link.countryCode === "UK");

    return ukPronunciation || links[Math.floor(Math.random() * links.length)];
  }

  function playAudio(audioURL) {
    const audio = new Audio(audioURL);
    audio.play();
  }

  return (
    <ButtonWrapper>
      <PlayButton onClick={()=>playAudio(selectedAudio.URL}>
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
