import React from 'react';
import ItemDetailContainer from '../../componentes/ItemDetailContainer/index';
import { useParams } from 'react-router-dom';
const Detail = () => {
  const { id } = useParams();
  return (
    <div>
      <ItemDetailContainer id={id} />
    </div>
  );
};
export default Detail;
