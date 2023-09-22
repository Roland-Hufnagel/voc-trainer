import styled from "styled-components";
import SettingCard from "../../components/SettingCard";

export default function Dashboard({ settings, handleChangeSettings }) {
  return (
    <>
      <h2>Settings</h2>
      <SettingsList>
        {settings.map((setting) => {
          const { name, label, value } = setting;
          return (
            <SettingCard
              key={name}
              setting={setting}
              handleChangeSettings={handleChangeSettings}
            />
          );
        })}
      </SettingsList>
    </>
  );
}

const SettingsList = styled.ul`
  all: unset;
`;
