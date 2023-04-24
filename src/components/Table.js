import React from 'react';

const Table = ({ transactions }) => {
  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <table>
      <head>
        <tr>
          <h>Date</h>
          <h>Description</h>
          <h>Category</h>
          <h>Amount</h>
        </tr>
      </head>
      <>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
        <tr>
          <td colSpan="3">Total</td>
          <td>{total}</td>
        </tr>
      </>
    </table>
  );
};

export default Table;