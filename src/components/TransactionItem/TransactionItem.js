import PropTypes from 'prop-types';

function TransactionItem({ type, amount, currency }) {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}
export default TransactionItem;
TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
