import React from "react";
import ModalWrapper from "./ClassModal.styles";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  confirmText: string;
  cancelText: string;
  inputsValues: any;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ClassModal = ({
  isOpen,
  onClose,
  onConfirm,
  confirmText,
  cancelText,
  inputsValues,
  onInputChange,
}: Props) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper isOpen={isOpen}>
      <div>
        <h2>Sinf Ma'lumotlari</h2>
        <input
          type="text"
          name="name"
          placeholder="Sinf nomi"
          value={inputsValues.name || ""}
          onChange={onInputChange}
        />
        <input
          type="number"
          name="studentCount"
          placeholder="O‘quvchilar soni"
          value={inputsValues.studentCount || ""}
          onChange={onInputChange}
        />
        <input
          type="text"
          name="teacherId"
          placeholder="O‘qituvchi ID"
          value={inputsValues.teacherId || ""}
          onChange={onInputChange}
        />
        <button onClick={onConfirm}>{confirmText}</button>
        <button onClick={onClose}>{cancelText}</button>
      </div>
    </ModalWrapper>
  );
};

export default ClassModal;
