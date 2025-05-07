import styled from "styled-components";

interface ModalWrapperProps {
  isOpen: boolean;
}

const ModalWrapper = styled.div<ModalWrapperProps>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;

  > div {
    background-color: #111;
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid #14b8a6;
    color: #14b8a6;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 320px;
  }

  h2 {
    font-size: 1.5rem;
    text-align: center;
    color: #14b8a6;
  }

  input {
    padding: 0.6rem 1rem;
    border: 1px solid #14b8a6;
    border-radius: 0.5rem;
    background-color: #000;
    color: #14b8a6;
  }

  input::placeholder {
    color: #888;
  }

  button {
    padding: 0.6rem 1rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    border: 1px solid #14b8a6;
    background-color: transparent;
    color: #14b8a6;
    transition: background-color 0.3s;

    &:hover {
      background-color: #14b8a6;
      color: #000;
    }
  }
`;

export default ModalWrapper;
