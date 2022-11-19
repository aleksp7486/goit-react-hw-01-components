import PropTypes from 'prop-types';

import {
  StatisticsCard,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

import { getRandomColor } from 'utils';

const Statistic = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(e => {
          const { id, label, percentage } = e;
          return (
            <Item
              style={{
                backgroundColor: getRandomColor(),
              }}
              key={id}
            >
              <Label>{label}</Label>
              <Percentage>{percentage}</Percentage>
            </Item>
          );
        })}
      </StatList>
    </StatisticsCard>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};

export default Statistic;
