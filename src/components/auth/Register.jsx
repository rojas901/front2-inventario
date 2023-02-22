import React from 'react'
import { useState } from 'react';
import ContainerPage from '../ui/ContainerPage'
import registerServices from '../../services/registerService'
import Swal from 'sweetalert2'

const Register = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    contrasena:'',
    rol:''
  });

  const handleOnChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerServices.create(usuario);
      Swal.fire({
        icon: 'success',
        title: 'Se ha guardado la informacion',
        showConfirmButton: false,
        timer: 1500
      });
      setUsuario({
        nombre:'',
        email:'',
        contrasena:'',
        rol: ''
      })
    } catch (error) {
      console.log(error)
    }    
  }

  return (
    <ContainerPage titulo={'Registro'}>
      <form onSubmit={handleOnSubmit} className='d-flex justify-content-around flex-column align-items-center'>
          <div className="col mt-2 w-50">
            <input
              type="text"
              className="form-control" placeholder="Nombre"
              name='nombre'
              onChange={handleOnChange}
              value={usuario.nombre}
              required
            />
          </div>
          <div className="col mt-2 w-50">
            <input
              type="text"
              className="form-control" placeholder="Email"
              name='email'
              onChange={handleOnChange}
              value={usuario.email}
              required
            />
          </div>
          <div className="col mt-2 w-50">
            <input
              type="text"
              className="form-control" placeholder="Contraseña"
              name='contrasena'
              onChange={handleOnChange}
              value={usuario.contrasena}
              required
            />
          </div>
          <div className="input-group col w-50 mt-2">
            <label
              className="input-group-text" htmlFor="inputGroupSelect01"
            >
              Rol
            </label>
            <select
              className="form-select" id="inputGroupSelect01"
              name='rol'
              onChange={handleOnChange}
              value={usuario.rol}
              required
            >
              <option value='' disabled>--Seleccione--</option>
              <option value={'Docente'}>Docente</option>
              <option value={'Administrador'}>Administrador</option>
            </select>
          </div>
          <div className='col d-flex justify-content-center mt-2'>
            <button
              className='rounded-pill btn btn-outline-dark'
            >
              Guardar
            </button>
          </div>
      </form>
    </ContainerPage>    
  )
}

export default Register