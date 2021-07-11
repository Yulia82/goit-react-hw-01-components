import PropTypes from "prop-types";
// import { Label } from '../profile/Profile.styles'
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
  percentage: PropTypes.string.isRequired,
};
