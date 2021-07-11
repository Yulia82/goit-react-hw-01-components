import { TrStyle } from "./TransactionHistory.styles";

export const TransactionItem = ({ id, type, amount, currency }) => {
  return (
    <TrStyle key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TrStyle>
  );
};
