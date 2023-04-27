import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Table from './components/Table';
import Form from './components/Form';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/transaction/`)
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
        setFilteredTransactions(data);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredTransactions(transactions);
    } else {
      setFilteredTransactions(transactions.filter(transaction => transaction.category === selectedCategory));
    }
  }, [transactions, selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className='App'>
      <Header />
      <Form />
      <div className="filter-container">
        <label>Filter by Category:</label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Income">Income</option>
          <option value="Transportation">Transportation</option>
          <option value="Gift">Gift</option>
          <option value="Fashion">Fashion</option>
        </select>
      </div>
      <Table transactions={filteredTransactions} searchTerm={searchTerm} onDelete={deleteTransaction} />
      <Footer />
    </div>
  );
};

export default App;
