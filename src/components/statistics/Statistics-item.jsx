import PropTypes from "prop-types";
import { Percentage, Label } from "./Statistics.styles";

export const StatisticItem = ({ label, percentage }) => {
  return (
    <>
      <Label>{label}</Label>
      <Percentage>{percentage}</Percentage>
    </>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
