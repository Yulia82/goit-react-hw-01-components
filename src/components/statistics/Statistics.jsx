import PropTypes from "prop-types";
import { Title } from "../Title.styles";
import { Statistic } from "./Statistics.styles";

export const Statistics = ({ title, children }) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}

      {children}
    </Statistic>
  );
};

Statistics.defaultProps = {
  title: "",
  children: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
