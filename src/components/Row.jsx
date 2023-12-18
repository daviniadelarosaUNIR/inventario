import React from 'react';

const Row = ({ data }) => {
  return (
    <tr>
      {data.map((item, index) => (
        <td key={index}>{item}</td>
      ))}
    </tr>
  );
};

export default Row;
