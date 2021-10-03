import s from './Statistic.module.css';
import StatisticList from '../StatisticList/StatisticList';
function Statistic({ data }) {
  return (
    <section className={s.section}>
      <div className={s.statistics}>
        <h2 className={s.title}>Upload stats</h2>
        <StatisticList value={data} />
      </div>
    </section>
  );
}
export default Statistic;
