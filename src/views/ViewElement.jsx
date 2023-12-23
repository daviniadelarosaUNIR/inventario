import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useElements } from '../hooks/useElements';

const ViewElement = () => {
  const { id } = useParams();
  const { data: elements } = useElements();

  const [rowData, setRowData] = useState(null);

  useEffect(() => {
    const foundElement = elements.find(element => element.id === id);
    setRowData(foundElement);
  }, [id, elements]);

  if (!rowData) {
    return <div>Buscando elemento</div>;
  }

  const commonDetails = (
    <div>
      <h2>Detalles del {id < 100 ? 'Elemento' : 'Proveedor'}</h2>
      <p>ID: {rowData.id}</p>
      <p>Imagen:</p>
      <img src={"../" + rowData.image} alt="Elemento" height={50} width={100}></img>
      <p>Nombre: {rowData.name}</p>
    </div>
  );

  const specificDetails = id < 100 ? (
    <div>
      {commonDetails}
      <p>Cantidad: {rowData.quantity}</p>
      <p>Proveedor: {rowData.provider}</p>
    </div>
  ) : (
    <div>
      {commonDetails}
      <p>Email: {rowData.email}</p>
      <p>Teléfono: {rowData.phone}</p>
    </div>
  );

  return (
    <div>
      {specificDetails}
    </div>
  );
};

export default ViewElement;
