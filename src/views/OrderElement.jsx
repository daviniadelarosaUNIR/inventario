import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Action } from '../components/Action';
import { useElements } from '../hooks/useElements';

const OrderElement = () => {
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
      <h3>Detalles del {id < 100 ? 'Elemento' : 'Proveedor'}</h3>
      <p>ID: {rowData.id}</p>
      <p>Nombre: {rowData.name}</p>

    </div>
  );

  const specificDetails = id < 100 ? (
    <div>
      {commonDetails}
      <p>Provvedor: {rowData.provider}</p>
      <form>
        <label htmlFor="quantity">Stock</label>
        <br />
        <input type="number" name="quantity" defaultValue={rowData.quantity} />
        <br />
        <br />
        <Action text="Pedir"  path="/orderedelement" delay={1000}/>
        <br />
        <br />
      </form>
    </div>
  ) : (
    <div>
      {commonDetails}
      <p>Email: {rowData.email}</p>
      <b>Debes realizar el pedido por medio de la vista de elementos</b>
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

export default OrderElement;
