import PropTypes from "prop-types";
import { StatisticItem } from "./Statistics-item";
import { ItemStat, Statlist } from "./Statistics.styles";
import { randomColor } from "../../utils/random-color";

export const StatisticList = ({ stats }) => {
  return (
    <Statlist>
      {stats.map(({ id, label, percentage }) => {
        const colorItem = randomColor();
        return (
          <ItemStat key={id} colorLi={colorItem}>
            <StatisticItem label={label} percentage={percentage} />
          </ItemStat>
        );
      })}
    </Statlist>
  );
};

StatisticList.propTypes = {
  paintings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
