import React from 'react';

const ContainerPage = ({titulo, mostrar, handleClick, children}) => {
  return (
    <div className='container-fluid bg-light fill'>
      <h1 className='text-center'>{titulo}</h1>
      <hr />
      <div className='d-flex justify-content-center mb-3'>
        <button className='rounded-pill btn btn-outline-dark'
        onClick = {handleClick}
        >{mostrar ? 'Datos':'Nuevo'}</button>
      </div>
      {children}
    </div>
  );
}

export default ContainerPage;