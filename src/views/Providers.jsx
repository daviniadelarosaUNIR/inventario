// Table.jsx
import React, { useState } from 'react';
import Row from '../components/Row';
import SearchBar from '../components/SearchBar';

const Providers = ({ rows }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRows = rows
    .filter((row) => row.id && row.image && row.name && row.email && row.phone) // Asegúrate de que la fila tenga las propiedades necesarias
    .filter((row) =>
      Object.values(row).some((cell) => cell.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <br />
      <br />
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th></th>
            <th>Acciones</th>
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

export default Providers;
