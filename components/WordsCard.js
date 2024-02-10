import styled from "styled-components";
import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import EditWordForm from "./EditWordForm";
import Icon from "./Icon";

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
              <Icon variant="views" size={20} />
              {card.views}
            </Views>
            <Hits aria-label="Number of hits">
              <Icon variant="checkmarkSmall" size={16} />
              {card.hits}
            </Hits>
          </div>
        </Content>
        <Buttons>
          <Button
            text="Edit"
            onClick={() => setEditMode(true)}
            iconVariant="edit"
          />
          <Button
            text="Delete"
            onClick={() => setDeleteMode(true)}
            iconVariant="delete"
          />
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
          <p>&quot;{card.word}&quot;?</p>
          <br />
          <Button
            text="Cancel"
            onClick={() => setDeleteMode(false)}
            iconVariant="cancel"
          />{" "}
          <Button
            text="Delete"
            onClick={() => handleDeleteCard(card.id)}
            iconVariant="delete"
          />
        </Modal>
      )}
    </>
  );
}
const Views = styled.div`
  gap: 0.35rem;
  margin-right: 0.75rem;
`;
const Hits = styled.div`
  gap: 0.35rem;
  margin: 0 1rem;
`;
const WordCard = styled.li`
  background-color: var(--white);
  color: var(--darktext);
  box-shadow: var(--boxshadow-secondary);
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
  padding: 0.5rem;
  max-width: 430px;
`;
const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.3rem;

  div {
    display: flex;
    align-items: center;
    align-content: center;
  }
`;
const Buttons = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
