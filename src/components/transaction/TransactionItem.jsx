import { TrStyle } from "./TransactionHistory.styles";
import PropTypes from "prop-types";

export const TransactionItem = ({ id, type, amount, currency }) => {
  return (
    <TrStyle key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TrStyle>
  );
};

TransactionItem.propTypes = {
  key: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.number.isRequired,
};
