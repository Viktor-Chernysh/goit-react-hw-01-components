import PropTypes from 'prop-types';
import s from './StatisticList.module.css';

const colorPicker = () => {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  return backgroundColor;
};
function StatisticList({ value }) {
  return (
    <ul className={s.statList}>
      {value.map(({ id, label, percentage }) => (
        <li
          className={s.item}
          key={id}
          style={{ backgroundColor: colorPicker() }}
        >
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
}
export default StatisticList;
StatisticList.propTypes = {
  value: PropTypes.array.isRequired,
  label: PropTypes.string,
  percentage: PropTypes.number,
  id: PropTypes.number,
};
