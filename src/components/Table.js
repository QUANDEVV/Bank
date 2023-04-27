import React from 'react';

const Table = ({ transactions, onDelete }) => {
  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  const handleDelete = (id,) => {
    fetch(`http://localhost:5000/transaction/${id}`, { 
      method: 'DELETE'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        onDelete(id);
      })
      .catch(error => console.error(`Error deleting transaction with ID ${id}: ${error}`));
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
