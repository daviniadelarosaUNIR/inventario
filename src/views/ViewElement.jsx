// ViewElement.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Action } from '../components/Action';
import {useElements} from "../hooks/useElements";

const ViewElement = () => {
  const { id } = useParams();
  let elements = useElements();
  let rowData;
  let result;
  if(id<100){
    elements= elements[0];
    rowData = elements[id-1];
    result = (
      <div>
        <h2>Detalles del Elemento</h2>
        <p>ID: {rowData[0]}</p>
        <p>Imagen:</p>
        <img src={"../" + rowData[1]} alt="Elemento" height={50} width={100}></img>
        <p>Nombre: {rowData[2]}</p>
        <p>Cantidad: {rowData[3]}</p>
    
        <Action text="Inventory" path="/inventory" delay={1000} />
      </div>
    );
  }else{
    elements = elements[1];
    rowData = elements[id-101];
    result = (
      <div>
        <h2>Detalles del Proveedor</h2>
        <p>ID: {rowData[0]-100}</p>
        <p>Imagen:</p>
        <img src={"../" + rowData[1]} alt="Elemento" height={50} width={100}></img>
        <p>Nombre: {rowData[2]}</p>
        <p>Email: {rowData[3]}</p>
        <p>Teléfono: {rowData[4]}</p>
    
        <Action text="Providers" path="/providers" delay={1000} />
      </div>
    );
  }

  if (!rowData) {
    return <div>Buscando elemento</div>;
  }
   
  
  return result;
  
};

export default ViewElement;





