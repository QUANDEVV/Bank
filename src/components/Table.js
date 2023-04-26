import React from 'react';

const Table = ({ transactions, onDelete }) => {
  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  const handleDelete = (id) => {
    fetch(`https://my-json-server.typicode.com/QUANDEVV/Bank/transactions/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        onDelete(id);
      })
      .catch(error => console.error(error));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td><button onClick={() => handleDelete(transaction.id)}>Delete</button></td>
          </tr>
        ))}
        <tr>
          <td colSpan="3">Total</td>
          <td>{total}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
