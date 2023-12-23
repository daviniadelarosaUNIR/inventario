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
    return <div>Buscando elemento</div>;
  }

  const commonDetails = (
    <div>
      <h2>Detalles del {id < 100 ? 'Elemento' : 'Proveedor'}</h2>
      <p>ID: {rowData.id}</p>
      <p>Imagen:</p>
      <img src={"../" + rowData.image} alt="Elemento" height={50} width={100}></img>
      <p>Nombre: {rowData.name}</p>
      <p>Proveedor: {rowData.provider}</p>
    </div>
  );

  const specificDetails = id < 100 ? (
    <div>
      {commonDetails}
      <form>
        <label htmlFor="quantity">Cantidad</label>
        <br />
        <input type="number" name="quantity" defaultValue={rowData.quantity} />
        <br />
        <Action text="Pedir"  path="/orderedelement" delay={1000}/>
        <br />
        <br />
        <br />
      </form>
    </div>
  ) : (
    <div>
      {commonDetails}
      <p>Debes realizar el pedido por medio de la vista de elementos</p>
    </div>
  );

  return (
    <div>
      {specificDetails}
      <Action text={id < 100 ? 'Inventory' : 'Providers'} path={id < 100 ? '/inventory' : '/providers'} delay={1000} />
    </div>
  );
};

export default OrderElement;
