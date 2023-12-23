import { useEffect, useState } from "react";

export const useElements = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData([
        { id: '1', image: 'keyboard.png', name: 'Teclado', quantity: 4, provider: '101' },
        { id: '2', image: 'mouse.png', name: 'Ratón', quantity: 10, provider: '102' },
        { id: '3', image: 'pc.png', name: 'PC', quantity: 5, provider: '103' },
        { id: '101', image: 'p.png', name: 'Keyboards Provider', email: 'keyboards@provider.com', phone: '910000000' },
        { id: '102', image: 'p.png', name: 'Mouse Provider', email: 'mouse@provider.com', phone: '910000001' },
        { id: '103', image: 'p.png', name: 'PC Provider', email: 'pc@provider.com', phone: '910000002' },
      ]);
    }, 2500);
  }, []);

  const updateElement = (id, newData) => {
    setData(prevData => {
      return prevData.map(element => {
        if (element.id === id) {
          return { ...element, ...newData };
        }
        return element;
      });
    });
  };

  return { data, updateElement };
};
