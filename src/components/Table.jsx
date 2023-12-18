// Table.jsx
import React, { useState } from 'react';
import Row from './Row';
import SearchBar from './SearchBar';

const Table = ({ rows }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRows = rows.filter((row) =>
    row.some((cell) => cell.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <table>
        <tbody>
          {filteredRows.map((rowData, index) => (
            <Row key={index} data={rowData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
