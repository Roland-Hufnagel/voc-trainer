import styled from "styled-components";
import Button from "./Button";
import EditIcon from "../components/icons/EditIcon";
import CancelIcon from "./icons/CancelIcon";
import SaveIcon from "./icons/SaveIcon";
import Modal from "./Modal";
import { useState } from "react";

export default function SettingCard({ setting, handleChangeSettings }) {
  const [showModal, setShowModal] = useState(false);

  function handleChange(event) {
    event.preventDefault();
    setShowModal(false);
    const regex = /^[1-9][0-9]*$/;
    if (regex.test(event.target.setting.value)) {
      handleChangeSettings(setting.name, event.target.setting.value);
    }
  }

  return (
    <>
      <StyledSettingCard>
        <p>{setting.label}</p>
        <p>{setting.value}</p>
        <Button
          onClick={() => setShowModal(true)}
          text="Edit"
          icon={EditIcon}
        />
      </StyledSettingCard>
      {showModal && (
        <Modal handleClose={() => setShowModal(false)}>
          <form onSubmit={handleChange}>
            <p>{setting.label}</p>
            <input
              name="setting"
              type="number"
              defaultValue={setting.value}
              autoFocus
            />
            <Button
              text="Cancel"
              onClick={() => setShowModal(false)}
              icon={CancelIcon}
            />
            <Button text="Save" type="submit" icon={SaveIcon} />
          </form>
        </Modal>
      )}
    </>
  );
}
const StyledSettingCard = styled.li`
  background-color: var(--white);
  margin: 1rem auto;
  padding: 0.8rem;
  width: 30rem;
  border-radius: 0.25rem;
  box-shadow: var(--boxshadow-secondary);
  display: flex;
  gap: 1rem;
`;
