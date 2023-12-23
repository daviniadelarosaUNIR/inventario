// Table.jsx
import React, { useState } from 'react';
import Row from '../components/Row';
import SearchBar from '../components/SearchBar';

const Inventory = ({ rows }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRows = rows
  .filter((row) => row.id && row.image && row.name && row.quantity && row.provider)
  .filter((row) =>
    ['id', 'name', 'quantity', 'provider'].some(
      (field) => String(row[field]).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Proveedor</th>
            <th>Acciones</th>
            <th></th>
            <th></th>
          </tr>
          {filteredRows.map((rowData, index) => (
            <Row key={index} data={Object.values(rowData)} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
