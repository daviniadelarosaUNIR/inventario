// ViewElement.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Action } from '../components/Action';
import {useElements} from "../hooks/useElements";

const ViewElement = () => {
  const { id } = useParams();

  let elements = useElements();
  let rowData;
  if(id<100){
    elements= elements[0];
    rowData = elements[id-1];
  }else{
    elements = elements[1];
    rowData = elements[id-101];
  }

  if (!rowData) {
    return <div>Buscando elemento</div>;
  }

  return (
    <div>
      <h2>Detalles del Elemento</h2>
      <p>ID: {rowData[0]}</p>
      <p>Imagen:</p> 
      <img src={"../"+rowData[1]} alt="Elemento" height={50} width={100}></img>
      <form >
        <label htmlFor="nombre">Nombre</label>
        <br />
        <input type="text" name="nombre" id="" defaultValue={rowData[2]}/>
        <br />
        <label htmlFor="cantidad">Cantidad</label>
        <br />
        <input type="number" name="cantidad" id="" defaultValue={rowData[3]}/>
        <br />
        <Action text="Modificar" path="/modifiedelement" delay={1000} />
        <br />
        <br />
      </form>
      

      <Action text="Inventory" path="/inventory" delay={1000} />

    </div>
  );
};

export default ViewElement;





