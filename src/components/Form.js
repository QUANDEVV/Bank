import React, { useState } from 'react';

const Form = ({ addTransaction }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');




  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = { date, description, category, amount };

    fetch('https://my-json-server.typicode.com/QUANDEVV/Bank/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // do something with the response data
      })
      .catch(error => console.error(error));
  };






  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
    </div>
  );
};

export default Form;