// Table.jsx
import React, { useState } from 'react';
import Row from '../components/Row';
import SearchBar from '../components/SearchBar';
import { useElements } from '../hooks/useElements';


const Providers = ({ rows }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { updateElement } = useElements();

  const filteredRows = rows.filter((row) =>
    row.some((cell) => cell.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleUpdateElement = (id) => {
    // Supongamos que quieres actualizar el nombre y la cantidad
    updateElement(id, { name: 'Nuevo Nombre', quantity: 42 });
  };
  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
          </tr>
          {filteredRows.map((rowData, index) => (
            <Row key={index} data={rowData} />
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default Providers;
