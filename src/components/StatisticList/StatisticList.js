import PropTypes from 'prop-types';
import StatisticItem from '../StatisticItem/StatisticItem';
import s from './StatisticList.module.css';
function StatisticList({ value }) {
  return (
    <ul className={s.statList}>
      {value.map(element => (
        <li className={s.item} key={element.id}>
          <StatisticItem
            label={element.label}
            percentage={element.percentage}
          />
        </li>
      ))}
    </ul>
  );
}
export default StatisticList;
StatisticList.propTypes = {
  value: PropTypes.array.isRequired,
};
