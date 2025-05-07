import React from "react";
import {
  ModalBackdrop,
  ModalContainer,
  ModalTitle,
  Input,
  ModalActions,
  ModalButton,
} from "./TeacherModal.styles";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  inputsValues: any;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  confirmText: string;
  cancelText: string;
};

const TeacherModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onConfirm,
  inputsValues,
  onInputChange,
  confirmText,
  cancelText,
}) => {
  if (!isOpen) return null;

  return (
    <ModalBackdrop>
      <ModalContainer>
        <ModalTitle>O‘qituvchi Ma’lumotlari</ModalTitle>
        <Input
          name="firstName"
          placeholder="Ismi"
          value={inputsValues.firstName}
          onChange={onInputChange}
        />
        <Input
          name="lastName"
          placeholder="Familiyasi"
          value={inputsValues.lastName}
          onChange={onInputChange}
        />
        <Input
          name="birthDate"
          type="date"
          value={inputsValues.birthDate}
          onChange={onInputChange}
        />
        <Input
          name="classes"
          placeholder="Sinf IDlar (vergul bilan)"
          value={inputsValues.classes}
          onChange={onInputChange}
        />
        <ModalActions>
          <ModalButton onClick={onConfirm}>{confirmText}</ModalButton>
          <ModalButton cancel onClick={onClose}>{cancelText}</ModalButton>
        </ModalActions>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default TeacherModal;
