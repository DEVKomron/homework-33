import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalWrapper = styled.div`
  background-color: black;
  color: #001529;
  padding: 24px;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ModalButton = styled.button`
  background-color: #001529;
  color: black;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: darkcyan;
  }

  &:focus {
    outline: none;
  }
`;

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputField = styled.input`
  padding: 10px;
  border: 1px solid #001529;
  border-radius: 6px;
  background-color: transparent;
  color: #001529;
  font-size: 15px;

  &::placeholder {
    color: #66cccc;
  }

  &:focus {
    outline: none;
    border-color: darkcyan;
  }
`;

export const TextAreaField = styled.textarea`
  padding: 10px;
  border: 1px solid #001529;
  border-radius: 6px;
  background-color: transparent;
  color: #001529;
  font-size: 15px;
  resize: vertical;
  min-height: 80px;

  &::placeholder {
    color: #66cccc;
  }

  &:focus {
    outline: none;
    border-color: darkcyan;
  }
`;
