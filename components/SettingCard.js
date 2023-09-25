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
          <StyledForm onSubmit={handleChange}>
            <p>{setting.label}</p>
            <StyledInput
              name="setting"
              type="number"
              defaultValue={setting.value}
              autoFocus
            />
            <StyledButtonContainer>
              <Button
                text="Cancel"
                onClick={() => setShowModal(false)}
                icon={CancelIcon}
              />
              <Button text="Save" icon={SaveIcon} />
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
  padding: 0.8rem;
  width: 30rem;
  border-radius: 0.25rem;
  box-shadow: var(--boxshadow-secondary);
  display: flex;
  gap: 1rem;
`;

const StyledForm = styled.form`
  display: grid;
  align-content: center;
  gap: 1rem;
`;

const StyledInput = styled.input`
  line-height: 1.6rem;
  width: 4rem;
  border-radius: 5px;
  margin: 0.2rem;
  padding: 0.2rem 0.4rem;
  font-size: 2rem;
  text-align: center;

   /* Disable the increment and decrement buttons for number input */
   &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;}
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;

`;
