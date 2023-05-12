import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 700px;
  width: 700px;
`;

export const TableCotainer = styled.table`
  border-collapse: collapse;
  width: 100%;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  thead {
    tr {
      text-align: left;
      background-color: #f2c283;
      color: white;

      &:hover {
        background-color: #f2c283;
      }
    }
  }

  tr {
    &:nth-child(even){
      background-color: #f2f2f2;
    }

    &:hover {
      background-color: #ddd;
    }
  }
`;
