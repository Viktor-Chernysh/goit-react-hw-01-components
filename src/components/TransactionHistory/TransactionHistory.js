import s from './TransactionHistory.module.css';
import TransactionItem from '../TransactionItem/TransactionItem';

function TransactionHistory({ transactions }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.headRow}>
          <th className={s.cell}>Type</th>
          <th className={s.cell}>Amount</th>
          <th className={s.cell}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr className={s.row} key={transaction.id}>
            <TransactionItem
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default TransactionHistory;
