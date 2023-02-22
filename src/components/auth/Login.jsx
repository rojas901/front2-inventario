import React from 'react'
import { useState } from 'react';
import ContainerPage from '../ui/ContainerPage'
import authServices from '../../services/authService';
import Swal from 'sweetalert2'
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const {setUser} = useUser()

  const navigate = useNavigate()

  const [usuario, setUsuario] = useState({
    email: '',
    contrasena: ''
  });

  const handleOnChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await authServices.create(usuario);
      Swal.fire({
        icon: 'success',
        title: 'Se ha guardado la informacion',
        showConfirmButton: false,
        timer: 1500
      });
      setUsuario({
        email:'',
        contrasena:''
      })
      localStorage.setItem('Authorization', data.access_token)
      navigate('/')
      navigate(0)
      setUser(data)
    } catch (error) {
      console.log(error)
    }    
  }
  return (
    <ContainerPage titulo={'Login'}>
      <form onSubmit={handleOnSubmit} className='d-flex justify-content-around flex-column align-items-center'>
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
          <div className='col d-flex justify-content-center mt-2'>
            <button
              className='rounded-pill btn btn-outline-dark'
            >
              Enviar
            </button>
          </div>
      </form>
    </ContainerPage>    
  )
}

export default Login