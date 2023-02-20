import PropTypes from "prop-types";
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({items}) => {
  return (
  <table className={css.table}>
    <thead className={css.head}>
      <tr>
        <th className={css.headData}>Type</th>
        <th className={css.headData}>Amount</th>
        <th className={css.headData}>Currency</th>
      </tr>
    </thead>
    <tbody>
    {items.map(({id, type, amount, currency}) => {
      return (<tr key={id} className={css.tableRow}>
      <td className={css.tableData}>{type}</td>
      <td className={css.tableData}>{amount}</td>
      <td className={css.tableData}>{currency}</td>
    </tr>);
    })}
  </tbody>
</table>    
)};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
}
