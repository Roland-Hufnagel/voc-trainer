import styled from "styled-components";
import SettingCard from "../../components/SettingCard";
import { useState } from "react";
import Button from "../../components/Button";
import EditIcon from "../../components/icons/EditIcon";
import Modal from "../../components/Modal";

export default function Dashboard({
  settings,
  handleChangeSettings,
  handleAddNewWord,
}) {
  const [showUploadModal, setShowUploadModal] = useState(false);

  function handleFileUpload(event) {
    event.preventDefault();
    const [file] = event.target.data.files;
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        parseCSVFile(reader.result);
      },
      false
    );
    reader.readAsText(file);
    setShowUploadModal(false);
  }

  function parseCSVFile(file) {
    const array = file.split("\n");
    array.forEach((entry) => {
      const [word, translation] = entry.trim().split(";");
      handleAddNewWord(word, translation);
    });
  }

  function validateFileFormat(fileName) {
    if (!fileName.endsWith(".csv")) {
      alert(`${fileName} \n Format not supported! Please choose another file.`);
    }
  }

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
      <UploadCSV>
        <CSVLabel>Dateiupload</CSVLabel>
        <CSVDescription>
          You can upload your own dictionary. Only CSV-files are supported.{" "}
        </CSVDescription>{" "}
        <Button
          onClick={() => setShowUploadModal(true)}
          text="Upload"
          icon={EditIcon}
        />
      </UploadCSV>{" "}
      {showUploadModal && (
        <Modal handleClose={() => setShowUploadModal(false)}>
          {" "}
          <form onSubmit={handleFileUpload}>
            <StyledInput
              id="file-upload"
              type="file"
              name="data"
              required
              onChange={(event) => {
                validateFileFormat(event.target.value);
              }}
            />
            <Button type="submit" text="Upload" icon={EditIcon} />
          </form>
        </Modal>
      )}
    </>
  );
}

const StyledInput = styled.input`
  &::file-selector-button {
    padding: 0.5em;
    border-radius: 5px;
    background-color: var(--white);
    padding: 0.35rem 0.75rem;
  }
`;
const UploadCSV = styled.div`
  background-color: var(--white);
  margin: 1rem auto;
  padding: 1.6rem 1.6rem 3rem 1.6rem;
  max-width: 30rem;
  border-radius: 0.25rem;
  box-shadow: var(--boxshadow-secondary);
  display: grid;
  align-content: center;
  justify-items: center;
`;
const CSVLabel = styled.h3`
  font-size: 0.9rem;
  font-weight: 500;
  justify-self: start;
`;

const CSVDescription = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  color: var(--graytext);
  margin: 0.5rem 0 1.5rem;
  justify-self: start;
`;
const SettingsList = styled.ul`
  all: unset;
`;

const PageTitle = styled.h2`
  font-size: var(--page-title);
  font-weight: 500;
  text-align: center;
  margin: 2rem 0;
`;
