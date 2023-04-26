import React, { useState, useEffect } from 'react';


import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

import Table from './components/Table';
import Form from './components/Form';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/QUANDEVV/Bank/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  return (




    <div className='App'>
      <Header />
      <Form />
      <Table transactions={transactions} />
      <Footer />
    </div>
  );
};

export default App;



















