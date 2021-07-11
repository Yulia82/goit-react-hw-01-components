import { TransactionItem } from "./TransactionItem";
import { TransactionHist, TheadStyle } from "./TransactionHistory.styles";

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHist>
      <TheadStyle>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TheadStyle>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionItem
            id={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </TransactionHist>
  );
};
