import { useState } from "react";
import styled from "styled-components";
import Modal from "../../components/Modal";

export default function Dashboard({ settings, setSettings }) {
  const [showModal, setShowModal] = useState(false);
  const [editSetting, setEditSetting] = useState({});

  function handleEdit(setting) {
    setShowModal(true);
    setEditSetting(setting);
  }

  function closeModal() {
    setShowModal(false);
  }

  function handleChange(event) {
    setEditSetting((prevSetting) => {
      return { ...prevSetting, value: event.target.value };
    });
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

  return (
    <>
      <h2>Settings</h2>
      <SettingsList>
        {settings.map((setting) => {
          const { name, label, value } = setting;
          return (
            <div key={name}>
              <SettingCard>
                <p>{label}</p>
                <p>{value}</p>
                <button onClick={() => handleEdit(setting)}>edit</button>
              </SettingCard>
              {showModal && (
                <Modal handleClose={() => saveChangedSetting(editSetting)}>
                  <p>{editSetting.label}</p>
                  <input
                    type="number"
                    value={editSetting.value}
                    onChange={(event) => handleChange(event)}
                  />
                  <button type="button" onClick={closeModal}>
                    cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => saveChangedSetting(editSetting)}
                  >
                    save
                  </button>
                </Modal>
              )}
            </div>
          );
        })}
      </SettingsList>
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
