import PropTypes from 'prop-types';
import {
  Table,
  TableHeader,
  TableRow,
  TableData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <Table>
    <thead>
      <tr>
        <TableHeader>Type</TableHeader>
        <TableHeader>Amount</TableHeader>
        <TableHeader>Currency</TableHeader>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }, index) => (
        <TableRow key={id} rowNumber={index + 1}>
          <TableData>{type}</TableData>
          <TableData>{amount}</TableData>
          <TableData>{currency}</TableData>
        </TableRow>
      ))}
    </tbody>
  </Table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
