import PropTypes from 'prop-types';
import s from './StatisticList.module.css';
function StatisticList({ value }) {
  return (
    <ul className={s.statList}>
      {value.map(({ id, label, percentage }) => (
        <li className={s.item} key={id}>
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
          {/* <StatisticItem
            label={element.label}
            percentage={element.percentage}
          /> */}
        </li>
      ))}
    </ul>
  );
}
export default StatisticList;
StatisticList.propTypes = {
  value: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  id: PropTypes.number,
};
