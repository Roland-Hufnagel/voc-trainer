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
        <SettingLabel>{setting.label}</SettingLabel>
        <SettingDescription>{setting.description}</SettingDescription>
        <SettingValue>{setting.value}</SettingValue>
        <Button
          onClick={() => setShowModal(true)}
          text="Edit"
          icon={EditIcon}
        />
      </StyledSettingCard>

      {showModal && (
        <Modal handleClose={() => setShowModal(false)}>
          <StyledForm onSubmit={handleChange}>
            <p>{setting.label}</p>
            <StyledInput
              name="setting"
              type="number"
              min="1"
              max="99"
              defaultValue={setting.value}
              autoFocus
            />
            <StyledButtonContainer>
              <Button
                text="Cancel"
                onClick={() => setShowModal(false)}
                icon={CancelIcon}
              />
              <Button text="Save" icon={SaveIcon} type="submit" />
            </StyledButtonContainer>
          </StyledForm>
        </Modal>
      )}
    </>
  );
}

const StyledSettingCard = styled.li`
  background-color: var(--white);
  margin: 1rem auto;
  padding: 1.6rem 1.6rem 3rem 1.6rem;
  width: 30rem;
  border-radius: 0.25rem;
  box-shadow: var(--boxshadow-secondary);
  display: grid;
  align-content: center;
  justify-items: center;
`;

const StyledForm = styled.form`
  display: grid;
  align-content: center;
  gap: 1rem;
`;

const StyledInput = styled.input`
  line-height: 1.6rem;
  width: 3rem;
  border-radius: 5px;
  margin: 0.2rem;
  padding: 0.2rem 0.4rem;
  font-size: 2rem;
  text-align: center;

  /* Disable the increment and decrement buttons for number input */
  &::-webkit-inner-spin-button
   // &::-webkit-outer-spin-button
  {
    -webkit-appearance: none;
    //margin: 0;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
`;

const SettingLabel = styled.h3`
  font-size: 0.9rem;
  font-weight: 500;
  justify-self: start;
`;

const SettingDescription = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  color: var(--graytext);
  margin: 0.5rem 0;
  justify-self: start;
`;

const SettingValue = styled.p`
  background-color: var(--gray-98);
  font-size: 1.75rem;
  font-weight: 400;
  text-align: center;
  padding: 1rem;
  border-radius: var(--border-radius);
  width: 8rem;
  height: 4rem;
  margin: 2rem auto;
`;

