// SearchBar.jsx
import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div class="container-fluid">
    <form class="d-flex" role="search">
    <input
      type="text"
      placeholder="Buscar..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
    </form>
  </div>
    
  );
};

export default SearchBar;
