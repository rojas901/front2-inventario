import React, { useState, useEffect } from 'react';
import ContainerPage from '../ui/ContainerPage';
import usuarioServices from '../../services/usuarioService';
import Swal from 'sweetalert2';

const Usuarios = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    contrasena: '',
    estado: true,
    rol:''
  });
  const [editar, setEditar] = useState(false);

  const listarUsuarios = async () => {
    try {
      const { data } = await usuarioServices.get();
      setUsuarios(data);
    } catch (error) {
      console.log(error)
    }    
  }

  useEffect(() => {
    listarUsuarios();
  }, []);

  const handleOnChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await usuarioServices.create(usuario);
      Swal.fire({
        icon: 'success',
        title: 'Se ha guardado la informacion',
        showConfirmButton: false,
        timer: 1500
      });
      listarUsuarios();
      setUsuario({
        nombre:'',
        email:'',
        contrasena: '',
        estado:'',
        rol:''
      })
    } catch (error) {
      console.log(error)
    }    
  }

  const handleOnSubmitEditar = async (e) => {
    e.preventDefault();
    try {
      delete usuario.contrasena;
      console.log(usuario)
      await usuarioServices.update(usuario._id, usuario);
      Swal.fire({
        icon: 'success',
        title: 'Se ha actualizado la informacion',
        showConfirmButton: false,
        timer: 1500
      });
      listarUsuarios();
      handleEditar();
    } catch (error) {
      console.log(error)
    }    
  }

  const eliminarUsuario = async (id) => {
    try {
      await usuarioServices.delete(id);
    } catch (error) {
      console.log(error);
    }    
  }

  const handleOnDelete = (id) => {
    Swal.fire({
      title: 'Estas seguro?',
      text: "Esta operacion no sera reversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarUsuario(id);
        Swal.fire(
          'Borrado!',
          'Tu archivo ha sido borrado.',
          'success'
        );
        listarUsuarios();
      }
    })    
  }

  const handleEditar = (usuario) => {
    setEditar(!editar);
    if (editar === false) {
      setUsuario(usuario);
    } else {
      setUsuario({
        nombre: '',
        email:'',
        contrasena: '',
        estado: '',
        rol:''
      })
    }    
  }

  return (
    <ContainerPage titulo={'Usuarios'}>
      <h3 className='text-center'>{editar ? 'Editar' : 'Crear'}</h3>
      <form onSubmit={editar ? handleOnSubmitEditar:handleOnSubmit} className='d-flex justify-content-around'>
        <div className="row g-3">
          <div className="col">
            <input
              type="text"
              className="form-control" placeholder="Nombre"
              name='nombre'
              onChange={handleOnChange}
              value={usuario.nombre}
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control" placeholder="Email"
              name='email'
              onChange={handleOnChange}
              value={usuario.email}
              required
            />
          </div>
          <div className={editar ? "d-none" : "col"}>
            <input
              type="password"
              className="form-control" placeholder="Password"
              name='contrasena'
              onChange={handleOnChange}
              value={usuario.contrasena}
              required={editar ? false : true}
            />
          </div>
          <div className="input-group col">
            <label
              className="input-group-text" htmlFor="inputGroupSelect01"
            >
              Estado
            </label>
            <select
              className="form-select" id="inputGroupSelect01"
              name='estado'
              onChange={handleOnChange}
              value={usuario.estado}
              required
            >
              <option value=''>--Seleccione--</option>
              <option value={true}>Activo</option>
              <option value={false}>Inactivo</option>
            </select>
          </div>
          <div className="input-group col">
            <label
              className="input-group-text" htmlFor="inputGroupSelect02"
            >
              Rol
            </label>
            <select
              className="form-select" id="inputGroupSelect02"
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
          <div className='col d-flex justify-content-center'>
            <button
              className='rounded-pill btn btn-outline-dark'
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" className='text-center'>Número</th>
            <th scope="col" className='text-center'>Nombre</th>
            <th scope="col" className='text-center'>Email</th>
            <th scope="col" className='text-center'>Estado</th>
            <th scope="col" className='text-center'>Rol</th>
            <th scope="col" className='text-center'>Fecha creación</th>
            <th scope="col" className='text-center'>Fecha actualización</th>
            <th scope="col" className='text-center'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map((usuario, index) => {
              return (
                <tr key={usuario._id}>
                  <td className='text-center'>{index + 1}</td>
                  <td className='text-center'>{usuario.nombre}</td>
                  <td className='text-center'>{usuario.email}</td>
                  <td className='text-center'>{usuario.estado === true ? 'Activo' : 'Inactivo'}</td>
                  <td className='text-center'>{usuario.rol}</td>
                  <td className='text-center'>{usuario.fechaCreacion.slice(0, 10)}</td>
                  <td className='text-center'>{usuario.fechaActualizacion.slice(0, 10)}</td>
                  <td className="d-flex justify-content-around">
                    <button
                      className='rounded-pill btn btn-outline-dark'
                      onClick={
                        () => {
                          handleEditar(usuario);
                        }
                      }
                    >Editar</button>
                    <button
                      className='rounded-pill btn btn-outline-dark'
                      onClick={
                        () => {
                          handleOnDelete(usuario._id);
                        }
                      }
                    >Borrar</button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </ContainerPage>
  );
}

export default Usuarios;