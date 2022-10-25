import React from 'react';

const ContainerPage = ({titulo, children}) => {
  return (
    <div className='container-fluid bg-light'>
      <h1 className='text-center'>{titulo}</h1>
      <hr />
      {children}
    </div>
  );
}

export default ContainerPage;