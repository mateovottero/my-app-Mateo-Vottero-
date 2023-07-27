import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/index';
const ItemDetailContainer = ({ id }) => {
  const [producto, setProducto] = useState({});
  console.log('el item es:', id);

  useEffect(() => {

  }, []);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;

