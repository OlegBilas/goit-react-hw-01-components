import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  margin: 20px auto;
  text-align: center;
  vertical-align: middle;
`;

export const TableHeader = styled.th`
  width: 200px;
  color: #ffffff;
  padding-top: 10px;
  padding-bottom: 10px;
  text-transform: uppercase;
  background-color: #8095db;
`;

const getRowBackgroundColor = ({ rowNumber }) => {
  if (rowNumber % 2 === 0) {
    return '#d8d8e0';
  }
  return '#ffffff';
};

export const TableRow = styled.tr`
  color: gray;
  background-color: ${getRowBackgroundColor};
`;

export const TableData = styled.td`
  width: 200px;
  padding-top: 6px;
  padding-bottom: 6px;
  text-transform: capitalize;
`;

export const Label = styled.span`
  display: block;
  color: gray;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  display: block;
  font-weight: 500;
`;
