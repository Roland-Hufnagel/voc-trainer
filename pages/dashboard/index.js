import styled from "styled-components";
import SettingCard from "../../components/SettingCard";

export default function Dashboard({ settings, handleChangeSettings }) {
  return (
    <>
      <PageTitle>Settings</PageTitle>
      <SettingsList>
        {settings.map((setting) => {
          return (
            <SettingCard
              key={setting.name}
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

const PageTitle = styled.h2`
  font-size: var(--page-title);
  font-weight: 500;
  text-align: center;
  margin: 2rem 0;
`;
