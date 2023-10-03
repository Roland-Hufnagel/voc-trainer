import styled from "styled-components";
import Image from "next/image";
import iconCheckmark from "../public/assets/voc-trainer_icon_checkmark.png";
import iconEye from "../public/assets/voc-trainer_icon_eye.png";
import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import EditWordForm from "./EditWordForm";

export default function WordsCard({
  card,
  handleChangeCard,
  handleDeleteCard,
}) {
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  return (
    <>
      <WordCard>
        <Content>
          <p>{card.word}</p>
          <p>{card.translation}</p>
          <div>
            <Views aria-label="Number of views">
              <Image src={iconEye} alt="Eye icon" width="18" />
              {card.views}
            </Views>
            <Hits aria-label="Number of hits">
              <Image src={iconCheckmark} alt="Checkmark icon" width="18" />
              {card.hits}
            </Hits>
          </div>
        </Content>
        <Buttons>
          <Button text="Edit" onClick={() => setEditMode(true)} />
          <Button text="Delete" onClick={() => setDeleteMode(true)} />
        </Buttons>
      </WordCard>
      {editMode && (
        <Modal handleClose={() => setEditMode(false)}>
          <EditWordForm
            card={card}
            handleChangeCard={handleChangeCard}
            handleClose={() => setEditMode(false)}
          />
        </Modal>
      )}
      {deleteMode && (
        <Modal handleClose={() => setDeleteMode(false)}>
          <p>Are you sure to delete</p>
          <p>&quot;{card.word}&quot;?</p><br/>
          <Button text="Cancel" onClick={() => setDeleteMode(false)} />{" "}
          <Button text="Delete" onClick={() => handleDeleteCard(card.id)} />
        </Modal>
      )}
    </>
  );
}
const Views = styled.span`
  margin-right: 1rem;
`;
const Hits = styled.span`
  margin: 0 1rem;
`;
const WordCard = styled.li`
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
const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.3rem;
`;
const Buttons = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
