import PropTypes from "prop-types";
import { TransactionItem } from "./TransactionItem";
import {
  TransactionHist,
  TheadStyle,
  TrStyle,
} from "./TransactionHistory.styles";

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
          <TrStyle key={id}>
            <TransactionItem type={type} amount={amount} currency={currency} />
          </TrStyle>
        ))}
      </tbody>
    </TransactionHist>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
