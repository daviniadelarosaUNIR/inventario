import {useEffect, useState} from "react";
export const useElements = () => {
    const [elements, setElements] = useState([]);
    const [providers, setProviders] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setElements( [
                ['1','keyboard.png', 'Teclado', 4],
                ['2','mouse.png', 'Ratón', 10],
                ['3','pc.png', 'PC', 5],
              ]);
            setProviders( [
                ['101','p.png','Keyboards Provider', 'keyboards@provider.com', '910000000'],
                ['102','p.png','Mouse Provider', 'mouse@provider.com', '910000001'],
                ['103','p.png','PC Provider', 'pc@provider.com', '910000002'],
              ]);
        }, 2500);
        
    }, []);
    const updateElement = (id, newData) => {
        setElements(prevElements => {
          return prevElements.map(element => {
            if (element[0] === id) {
              return [...element.slice(0, 4), ...newData]; // Actualiza solo las propiedades necesarias
            }
            return element;
          });
        });
      };

    return [elements, providers, updateElement];
}