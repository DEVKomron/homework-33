import React, { ReactNode } from "react";
import { ModalOverlay, ModalWrapper, ModalButton, ModalButtonContainer, InputFieldContainer, InputField } from "./StudentModal.styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  inputsValues?: { firstName: string; lastName: string; birthDate: string; classId: string };
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
  inputsValues,
  onInputChange
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalWrapper>
        <div>{children}</div>
        <InputFieldContainer>
          <InputField
            type="text"
            name="firstName"
            value={inputsValues?.firstName || ""}
            onChange={onInputChange}
            placeholder="Ism"
          />
          <InputField
            type="text"
            name="lastName"
            value={inputsValues?.lastName || ""}
            onChange={onInputChange}
            placeholder="Familiya"
          />
          <InputField
            type="date"
            name="birthDate"
            value={inputsValues?.birthDate || ""}
            onChange={onInputChange}
          />
          <InputField
            type="text"
            name="classId"
            value={inputsValues?.classId || ""}
            onChange={onInputChange}
            placeholder="Sinf ID"
          />
        </InputFieldContainer>

        <ModalButtonContainer>
          {onConfirm && (
            <ModalButton onClick={onConfirm}>{confirmText}</ModalButton>
          )}
          <ModalButton onClick={onClose}>{cancelText}</ModalButton>
        </ModalButtonContainer>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default Modal;
