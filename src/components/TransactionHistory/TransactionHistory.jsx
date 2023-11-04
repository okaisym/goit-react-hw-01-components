
import {TransHistoryTitle, SectionText, TableBody,TableCell, TableRow, Table} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
      <Table>
        <TransHistoryTitle>
          <tr>
            <SectionText>Type</SectionText>
            <SectionText>Amount</SectionText>
            <SectionText>Currency</SectionText>
          </tr>
        </TransHistoryTitle>
        <TableBody>
          {items.map(({ id, type, amount, currency }) => (
            <TableRow key={id}>
              <TableCell>{type}</TableCell>
              <TableCell>{amount}</TableCell>
              <TableCell>{currency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }