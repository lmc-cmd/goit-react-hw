import './TransactionHistory.module.css';
const TransactionHistory = props => {
  return (
    <table
      className="transaction-history"
      style={{ width: '800px', border: '2px solid' }}
    >
      <thead>
        <tr
          className="transaction-head"
          style={{
            backgroundColor: 'aqua',
          }}
        >
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {props.transactions.map(el => (
          <tr key={el.id}>
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
