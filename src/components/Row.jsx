import React from 'react';
import { Action } from './Action';


const Row = ({ data }) => {

  return (
    <tr>
      {data.map((item, index) => (
        index===1?<td key={index}><img alt="Elemento"src={item} height={50} width={100}/></td>:<td key={index}>{item}</td>
      ))}
      <td><Action text="Ver" path={'/viewelement/'+data[0]} delay={0} /></td>
      <td><Action text="Modificar" path={'/updateelement/'+data[0]}delay={1000} /></td>
      <td><Action text="Realizar Pedido" path="/orderelement" delay={1000} /></td>
    </tr>
  );
};

export default Row;
