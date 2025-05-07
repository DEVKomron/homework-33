import React from "react";
import {
  ModalOverlay,
  ModalWrapper,
  ModalButton,
  ModalButtonContainer,
  InputFieldContainer,
  InputField,
  TextAreaField
} from "./ScholModal.styles";

interface School {
  name: string;
  location: string;
  phoneNumber: string;
  about: string;
  overallStudentCount: number | string;
  overallStaffCount: number | string;
  overallClassCount: number | string;
}

interface SchoolModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  inputsValues: School;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  confirmText?: string;
  cancelText?: string;
  children?: React.ReactNode;
}

const SchoolModal: React.FC<SchoolModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  inputsValues,
  onInputChange,
  confirmText = "Save",
  cancelText = "Cancel"
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalWrapper>
        <h3>{inputsValues.name ? "Edit School Info" : "Add New School"}</h3>
        <InputFieldContainer>
          <InputField
            type="text"
            name="name"
            value={inputsValues.name}
            onChange={onInputChange}
            placeholder="School Name"
          />
          <InputField
            type="text"
            name="location"
            value={inputsValues.location}
            onChange={onInputChange}
            placeholder="Location"
          />
          <InputField
            type="text"
            name="phoneNumber"
            value={inputsValues.phoneNumber}
            onChange={onInputChange}
            placeholder="Phone Number"
          />
          <TextAreaField
            name="about"
            value={inputsValues.about}
            onChange={onInputChange}
            placeholder="About"
          />
          <InputField
            type="number"
            name="overallStudentCount"
            value={inputsValues.overallStudentCount}
            onChange={onInputChange}
            placeholder="Student Count"
          />
          <InputField
            type="number"
            name="overallStaffCount"
            value={inputsValues.overallStaffCount}
            onChange={onInputChange}
            placeholder="Staff Count"
          />
          <InputField
            type="number"
            name="overallClassCount"
            value={inputsValues.overallClassCount}
            onChange={onInputChange}
            placeholder="Class Count"
          />
        </InputFieldContainer>
        <ModalButtonContainer>
          <ModalButton onClick={onConfirm}>{confirmText}</ModalButton>
          <ModalButton onClick={onClose}>{cancelText}</ModalButton>
        </ModalButtonContainer>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default SchoolModal;
