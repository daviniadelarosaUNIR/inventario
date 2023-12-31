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
    return <h1>Buscando elemento...</h1>;
  }

  const commonDetails = (
    <div>
      <h5 className="card-title">Información</h5>
      <p className="card-text">ID: {rowData.id}</p>
      <p className="card-text">Nombre: {rowData.name}</p>
    </div>
  );

  const specificDetails = id < 100 ? (
    <div>
      {commonDetails}
      <p className="card-text">Stock: {rowData.quantity}</p>
      <p className="card-text">Proveedor: {rowData.provider}</p>
    </div>
  ) : (
    <div>
      {commonDetails}
      <p>Email: {rowData.email}</p>
      <p>Teléfono: {rowData.phone}</p>
    </div>
  );

  return (

<div className="card mb-3 card" style={{ maxWidth: '540px' }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={"../" + rowData.image} className="img-fluid rounded-start" alt="Elemeto"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      {specificDetails}
      </div>
    </div>
  </div>
</div>
  );
};

export default ViewElement;
