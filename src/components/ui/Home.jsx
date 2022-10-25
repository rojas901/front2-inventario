import React from 'react';
import ContainerPage from './ContainerPage';
import inventarioImage from './inventarioImage.jpg';

const Home = () => {
  return (
    <ContainerPage titulo={'Bienvenido'}>
      <div className='d-flex flex-column align-items-center'>
        <img src={inventarioImage} alt="imagen inventario" className='p-3' height='479rem'/>
        <p className='fs-4 text-center'>En este sitio podrás tener acceso a todo lo relacionado con el inventario de la institución, tanto para su gestión como visualización.</p>
      </div>
    </ContainerPage>
  );
}

export default Home;