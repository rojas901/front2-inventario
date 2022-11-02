import React, { useState, useEffect } from 'react';
import ContainerPage from '../ui/ContainerPage';
import tipoServices from '../../services/tipoService';
import Swal from 'sweetalert2';

const TiposEquipos = () => {

  const [tipos, setTipos] = useState([]);
  const [tipo, setTipo] = useState({
    nombre: '',
    estado: true
  });
  const [editar, setEditar] = useState(false);

  const listarTipos = async () => {
    try {
      const { data } = await tipoServices.get();
      setTipos(data);
    } catch (error) {
      console.log(error)
    }    
  }

  useEffect(() => {
    listarTipos();
  }, []);

  const handleOnChange = (e) => {
    setTipo({ ...tipo, [e.target.name]: e.target.value });
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await tipoServices.create(tipo);
      Swal.fire({
        icon: 'success',
        title: 'Se ha guardado la informacion',
        showConfirmButton: false,
        timer: 1500
      });
      listarTipos();
      setTipo({
        nombre:'',
        estado:''
      })
    } catch (error) {
      console.log(error)
    }    
  }

  const handleOnSubmitEditar = async (e) => {
    e.preventDefault();
    try {
      await tipoServices.update(tipo._id, tipo);
      Swal.fire({
        icon: 'success',
        title: 'Se ha actualizado la informacion',
        showConfirmButton: false,
        timer: 1500
      });
      listarTipos();
      handleEditar();
    } catch (error) {
      console.log(error)
    }    
  }

  const eliminarTipo = async (id) => {
    try {
      await tipoServices.delete(id);
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
        eliminarTipo(id);
        Swal.fire(
          'Borrado!',
          'Tu archivo ha sido borrado.',
          'success'
        );
        listarTipos();
      }
    })    
  }

  const handleEditar = (tipo) => {
    setEditar(!editar);
    if (editar === false) {
      setTipo(tipo);
    } else {
      setTipo({
        nombre: '',
        estado: ''
      })
    }    
  }

  return (
    <ContainerPage titulo={'Tipos'}>
      <h3 className='text-center'>{editar ? 'Editar' : 'Crear'}</h3>
      <form onSubmit={editar ? handleOnSubmitEditar:handleOnSubmit} className='d-flex justify-content-around'>
        <div className="row g-3">
          <div className="col">
            <input
              type="text"
              className="form-control" placeholder="Nombre"
              name='nombre'
              onChange={handleOnChange}
              value={tipo.nombre}
              required
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
              value={tipo.estado}
              required
            >
              <option value=''>--Seleccione--</option>
              <option value={true}>Activo</option>
              <option value={false}>Inactivo</option>
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
            <th scope="col" className='text-center'>Estado</th>
            <th scope="col" className='text-center'>Fecha creación</th>
            <th scope="col" className='text-center'>Fecha actualización</th>
            <th scope="col" className='text-center'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            tipos.map((tipo, index) => {
              return (
                <tr key={tipo._id}>
                  <td className='text-center'>{index + 1}</td>
                  <td className='text-center'>{tipo.nombre}</td>
                  <td className='text-center'>{tipo.estado === true ? 'Activo' : 'Inactivo'}</td>
                  <td className='text-center'>{tipo.fechaCreacion.slice(0, 10)}</td>
                  <td className='text-center'>{tipo.fechaActualizacion.slice(0, 10)}</td>
                  <td className="d-flex justify-content-around">
                    <button
                      className='rounded-pill btn btn-outline-dark'
                      onClick={
                        () => {
                          handleEditar(tipo);
                        }
                      }
                    >Editar</button>
                    <button
                      className='rounded-pill btn btn-outline-dark'
                      onClick={
                        () => {
                          handleOnDelete(tipo._id);
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

export default TiposEquipos;