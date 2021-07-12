import PropTypes from "prop-types";
import { Title } from "../Title.styles";
import { ItemStat, Statlist, Statistic } from "./Statistics.styles";
import { randomColor } from "../../utils/random-color";
import { StatisticItem } from "./Statistics-item";

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}

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
    </Statistic>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
