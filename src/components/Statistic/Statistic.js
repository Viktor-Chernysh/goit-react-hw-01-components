import PropTypes from 'prop-types';
import s from './Statistic.module.css';
import StatisticItem from './StatisticItem/StatisticItem';

const colorPicker = () => {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  return backgroundColor;
};
function Statistic({ data }) {
  return (
    <section className={s.section}>
      <div className={s.statistics}>
        <h2 className={s.title}>Upload stats</h2>
        <ul className={s.statList}>
          {data.map(({ id, label, percentage }) => (
            <li
              className={s.item}
              key={id}
              style={{ backgroundColor: colorPicker() }}
            >
              <StatisticItem label={label} percentage={percentage} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Statistic;
Statistic.propTypes = {
  data: PropTypes.array.isRequired,
};
