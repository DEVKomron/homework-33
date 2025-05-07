import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 2rem;
  color: #001529;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const ActionButton = styled.button<{ delete?: boolean }>`
  background-color: ${({ delete: isDelete }) => (isDelete ? "#001529" : "#001529")};
  color: white;
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ delete: isDelete }) => (isDelete ? "#ff7875" : "#1de9b6")};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  border: 1px solid #001529;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    /* background-color: #0a0a0; */
  }
`;

export const TableHead = styled.th`
  text-align: left;
  padding: 0.75rem;
  border: 1px solid #001529;
`;

export const TableCell = styled.td`
  padding: 0.75rem;
  border: 1px solid #00bfa6;
`;
