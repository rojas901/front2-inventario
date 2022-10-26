import React from 'react';
import ContainerPage from './ContainerPage';
import notFound from './notFound.jpg'

const NotFound = () => {
  return (
    <ContainerPage titulo={'Not Found 404'}>
      <div className='d-flex flex-column align-items-center'>
        <p className='text-center fs-3'>Página no encontrada</p>
        <img
          alt='No encontrado'
          src={notFound}
          height='464rem'
        />
      </div>
    </ContainerPage>
  );
}

export default NotFound;