import styled from "styled-components";

import Modal from "../../components/Modal";

export default function Dashboard({ settings }) {
  function handleEdit(settingName) {
    console.log("EDIT", settingName);
  }

  return (
    <>
      <h2>Settings</h2>
      <SettingsList>
        {settings.map(({ name, label, value }) => {
          return (
            <SettingCard key={name}>
              <p>{label}</p>
              <p>{value}</p>
              <button onClick={() => handleEdit(name)}>edit</button>
            </SettingCard>
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
