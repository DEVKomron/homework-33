import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 2rem;
  min-height: 100vh;
  color: #001529;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #001529;
  text-align: center;
`;

export const ActionButton = styled.button<{ delete?: boolean }>`
  background-color: ${({ delete: isDelete }) =>
    isDelete ? "#001529" : "#001529"};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 500;
  margin: 0.25rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ delete: isDelete }) =>
      isDelete ? "#00bfa6" : "#00bfa6"};
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Card = styled.div`
  border: 1px solid #001529;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 191, 166, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardItem = styled.div`
  font-size: 1rem;
  color: #001529;

  strong {
    color: #00bfa6;
    font-weight: 600;
    margin-right: 0.5rem;
  }
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;
