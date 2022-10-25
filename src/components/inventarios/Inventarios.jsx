import React, {useState, useEffect} from 'react';
import inventarioServices from '../../services/inventarioService';

const Inventarios = () => {

  const [inventarios, setInventarios] = useState([]);

  const listarInventarios = async () => {
    try {
      const {data} = await inventarioServices.get();
      setInventarios(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    listarInventarios();
  }, []); 

  return (
    <>
      <h1>Inventarios</h1>
    </>
  );
}

export default Inventarios;