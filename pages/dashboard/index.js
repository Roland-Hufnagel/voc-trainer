import { useState } from "react";
import styled from "styled-components";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import EditIcon from "../../components/icons/EditIcon";
import CancelIcon from "../../components/icons/CancelIcon";
import SaveIcon from "../../components/icons/SaveIcon";


export default function Dashboard({ settings, setSettings }) {
  const [showModal, setShowModal] = useState(false);
  const [editSetting, setEditSetting] = useState({});

  function handleEditSetting(setting) {
    setShowModal(true);
    setEditSetting(setting);
  }

  function saveChangedSetting(setting) {
    setSettings((prevSettings) =>
      prevSettings.map((prevSetting) =>
        prevSetting.name === setting.name
          ? { ...prevSetting, value: editSetting.value }
          : prevSetting
      )
    );
    closeModal();
  }

  function closeModal() {
    setShowModal(false);
  }

  function handleChange(event) {
    const regex = /^[1-9][0-9]*$/;
    if (regex.test(event.target.value)) {
      setEditSetting((prevSetting) => {
        return { ...prevSetting, value: event.target.value };
      });
    }
  }

  return (
    <>
      <h2>Settings</h2>
      <SettingsList>
        {settings.map((setting) => {
          const { name, label, value } = setting;
          return (
            <SettingCard key={name}>
              <p>{label}</p>
              <p>{value}</p>
              <Button
                onClick={() => handleEditSetting(setting)}
                text="Edit"
                icon={EditIcon}
              />
            </SettingCard>
          );
        })}
      </SettingsList>

      {showModal && (
        <Modal handleClose={closeModal}>
          <p>{editSetting.label}</p>
          <input
            type="number"
            value={editSetting.value}
            autoFocus
            onChange={(event) => handleChange(event)}
          />
          <Button text="Cancel" onClick={closeModal} icon={CancelIcon} />
          <Button text="Save" onClick={() => saveChangedSetting(editSetting)} icon={SaveIcon} />
        </Modal>
      )}
    </>
  );
}

const SettingsList = styled.ul`
  all: unset;
`;

const SettingCard = styled.li`
  background-color: var(--white);
  margin: 1rem auto;
  padding: 0.8rem;
  width: 30rem;
  border-radius: 0.25rem;
  box-shadow: var(--boxshadow-secondary);
  display: flex;
  gap: 1rem;
`;
