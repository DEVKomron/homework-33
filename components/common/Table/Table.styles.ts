import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  padding: 10px;

  table {
    width: 100%;
    border: 1px solid #001529;
    border-collapse: collapse;
    background-color: black;
    color: #001529;
  }

  table tr,
  table th,
  table td {
    border: 1px solid #001529;
  }

  th, td {
    padding: 8px 6px;
    text-align: left;
  }
`;
