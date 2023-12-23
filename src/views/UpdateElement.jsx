import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Action } from '../components/Action';
import { useElements } from '../hooks/useElements';

const UpdateElement = () => {
  const { id } = useParams();
  const { data: elements, updateElement } = useElements();
  const navigate = useNavigate();

  const [rowData, setRowData] = useState(null);

  useEffect(() => {
    const foundElement = elements.find(element => element.id === id);
    setRowData(foundElement);
  }, [id, elements]);

  const handleUpdate = () => {
    const updatedData = {
      name: document.getElementsByName('name')[0].value,
      quantity: document.getElementsByName('quantity')[0]?.value,
      email: document.getElementsByName('email')[0]?.value,
      phone: document.getElementsByName('phone')[0]?.value,
    };

    // Actualizar el elemento utilizando el hook
    updateElement(id, updatedData);

    // Redirigir a la página correspondiente
    navigate(id < 100 ? '/inventory' : '/providers');
  };

  if (!rowData) {
    return <div>Buscando elemento</div>;
  }

  const commonDetails = (
    <div>
      <h2>Detalles del {id < 100 ? 'Elemento' : 'Proveedor'}</h2>
      <p>ID: {rowData.id}</p>
      <p>Imagen:</p>
      <img src={"../" + rowData.image} alt="Elemento" height={50} width={100}></img>
    </div>
  );

  const specificDetails = id < 100 ? (
    <div>
      {commonDetails}
      <form>
        <label htmlFor="name">Nombre</label>
        <br />
        <input type="text" name="name" defaultValue={rowData.name} />
        <br />
        <label htmlFor="quantity">Stock</label>
        <br />
        <input type="number" name="quantity" defaultValue={rowData.quantity} />
        <br />
        <label htmlFor="provider">Cantidad</label>
        <br />
        <input type="text" name="provider" defaultValue={rowData.provider} />
        <br />
        <Action text="Modificar" onClick={handleUpdate} path="/modifiedelement" delay={1000}/>
        <br />
        <Action text="Eliminar" path="/modifiedelement" delay={1000}/>
        <br />
        <br />
      </form>
    </div>
  ) : (
    <div>
      {commonDetails}
      <form>
        <label htmlFor="name">Nombre</label>
        <br />
        <input type="text" name="name" defaultValue={rowData.name} />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" name="email" defaultValue={rowData.email} />
        <br />
        <label htmlFor="phone">Teléfono</label>
        <br />
        <input type="text" name="phone" defaultValue={rowData.phone} />
        <br />
        <Action text="Modificar" onClick={handleUpdate} path="/modifiedelement" delay={1000}/>
        <br />
        <Action text="Eliminar" path="/modifiedelement" delay={1000}/>
        <br />
        <br />
      </form>
    </div>
  );

  return (
    <div>
      {specificDetails}
    </div>
  );
};

export default UpdateElement;
