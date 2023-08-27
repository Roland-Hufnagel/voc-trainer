import styled from "styled-components";
import Image from "next/image";
import iconCheckmark from "../public/assets/voc-trainer_icon_checkmark.png";
import iconEye from "../public/assets/voc-trainer_icon_eye.png";
import { BiEdit, BiSave, BiTrash, BiXCircle } from "react-icons/bi";

export default function WordsForm({ card }) {
  return (
    <StyledListItem>
      <FirstColumn>
        <p>{card.word}</p>
        <p>{card.translation}</p>
        <div>
          <ViewsIcon>
            <Image src={iconEye} alt="Eye icon" width="18" />
            {card.views}
          </ViewsIcon>

          <HitsIcon>
            <Image src={iconCheckmark} alt="Checkmark icon" width="18" />
            {card.hits}
          </HitsIcon>
        </div>
      </FirstColumn>
      <SecondColumn>
        <BiEdit fontSize="30" />
        <BiTrash fontSize="30" />
      </SecondColumn>
    </StyledListItem>
  );
}
const ViewsIcon = styled.span`
  margin-right: 1rem;
`;
const HitsIcon = styled.span`
  margin: 0 1rem;
`;
const StyledListItem = styled.li`
  background-color: white;
  color: var(--darktext);
  box-shadow: var(--boxshadow-secondary);
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
  padding: 0.5rem;
  width: 300px;
  & img {
    margin-right: 1rem;
  }
`;
const FirstColumn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.3rem;
`;
const SecondColumn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
