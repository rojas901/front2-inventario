import React, { useState, useEffect } from 'react';
import inventarioServices from '../../services/inventarioService';
import InventariosCard from './InventariosCard';
import ContainerPage from '../ui/ContainerPage';

const Inventarios = () => {

  const [inventarios, setInventarios] = useState([]);

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

  return (
    <ContainerPage titulo={'Inventarios'}>
      <InventariosCard inventarios={inventarios}/>
    </ContainerPage>      
  );
}

export default Inventarios;