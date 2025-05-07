import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: #111;
  color: #0ff;
  padding: 2rem;
  border: 1px solid #0ff;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 0 10px #0ff;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: #222;
  color: #0ff;
  border: 1px solid #0ff;
  border-radius: 6px;

  &::placeholder {
    color: #0ff;
    opacity: 0.6;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const ModalButton = styled.button<{ cancel?: boolean }>`
  padding: 0.5rem 1rem;
  background: ${(props) => (props.cancel ? "#555" : "#00bcd4")};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;
