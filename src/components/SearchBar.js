import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search by description" value={searchTerm} onChange={handleInputChange} />
    </div>
  );
};

export default SearchBar;
