import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';
import { getRandomColor } from 'utils';

const Statistic = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(e => {
          const { id, label, percentage } = e;
          return (
            <li
              style={{
                backgroundColor: getRandomColor(),
              }}
              className={css.item}
              key={id}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};

export default Statistic;
