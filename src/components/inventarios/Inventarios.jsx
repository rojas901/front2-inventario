import React, { useState, useEffect } from 'react';
import inventarioServices from '../../services/inventarioService';
import InventariosCard from './InventariosCard';
import ContainerPage from '../ui/ContainerPage';
import InventarioNew from './InventarioNew';

const Inventarios = () => {

  const [inventarios, setInventarios] = useState([]);
  const [mostrar, setMostrar] = useState(false);

  const listarInventarios = async () => {
    try {
      const { data } = await inventarioServices.get();
      setInventarios(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    listarInventarios();
  }, []);

  const handleClick = () => {
    setMostrar(!mostrar);
  }

  return (
    <ContainerPage 
      titulo={'Inventarios'}
      mostrar={mostrar}
      handleClick={handleClick}
    >
      <div className='d-flex justify-content-center mb-3'>
        <button className='rounded-pill btn btn-outline-dark'
        onClick = {handleClick}
        >{mostrar ? 'Datos':'Nuevo'}</button>
      </div>      
      {
        mostrar ? 
        <InventarioNew/> 
        :
        <InventariosCard inventarios={inventarios}/>
      }      
    </ContainerPage>      
  );
}

export default Inventarios;