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
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  max-width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
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
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkcyan; /* Darker #001529 on hover */
  }

  &:focus {
    outline: none;
  }
`;

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputField = styled.input`
  padding: 8px;
  border: 1px solid #001529;
  border-radius: 5px;
  background-color: transparent;
  color: #001529;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: darkcyan;
  }
`;
