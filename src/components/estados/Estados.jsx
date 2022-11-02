import React, { useState, useEffect } from 'react';
import ContainerPage from '../ui/ContainerPage';
import estadoServices from '../../services/estadoService';
import Swal from 'sweetalert2';

const Estados = () => {

  const [estados, setEstados] = useState([]);
  const [estado, setEstado] = useState({
    nombre: '',
    estado: true
  });
  const [editar, setEditar] = useState(false);

  const listarEstados = async () => {
    try {
      const { data } = await estadoServices.get();
      setEstados(data);
    } catch (error) {
      console.log(error)
    }    
  }

  useEffect(() => {
    listarEstados();
  }, []);

  const handleOnChange = (e) => {
    setEstado({ ...estado, [e.target.name]: e.target.value });
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await estadoServices.create(estado);
      Swal.fire({
        icon: 'success',
        title: 'Se ha guardado la informacion',
        showConfirmButton: false,
        timer: 1500
      });
      listarEstados();
      setEstado({
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
      await estadoServices.update(estado._id, estado);
      Swal.fire({
        icon: 'success',
        title: 'Se ha actualizado la informacion',
        showConfirmButton: false,
        timer: 1500
      });
      listarEstados();
      handleEditar();
    } catch (error) {
      console.log(error)
    }    
  }

  const eliminarEstado = async (id) => {
    try {
      await estadoServices.delete(id);
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
        eliminarEstado(id);
        Swal.fire(
          'Borrado!',
          'Tu archivo ha sido borrado.',
          'success'
        );
        listarEstados();
      }
    })    
  }

  const handleEditar = (estado) => {
    setEditar(!editar);
    if (editar === false) {
      setEstado(estado);
    } else {
      setEstado({
        nombre: '',
        estado: ''
      })
    }    
  }

  return (
    <ContainerPage titulo={'Estados'}>
      <h3 className='text-center'>{editar ? 'Editar' : 'Crear'}</h3>
      <form onSubmit={editar ? handleOnSubmitEditar:handleOnSubmit} className='d-flex justify-content-around'>
        <div className="row g-3">
          <div className="col">
            <input
              type="text"
              className="form-control" placeholder="Nombre"
              name='nombre'
              onChange={handleOnChange}
              value={estado.nombre}
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
              value={estado.estado}
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
            estados.map((estado, index) => {
              return (
                <tr key={estado._id}>
                  <td className='text-center'>{index + 1}</td>
                  <td className='text-center'>{estado.nombre}</td>
                  <td className='text-center'>{estado.estado === true ? 'Activo' : 'Inactivo'}</td>
                  <td className='text-center'>{estado.fechaCreacion.slice(0, 10)}</td>
                  <td className='text-center'>{estado.fechaActualizacion.slice(0, 10)}</td>
                  <td className="d-flex justify-content-around">
                    <button
                      className='rounded-pill btn btn-outline-dark'
                      onClick={
                        () => {
                          handleEditar(estado);
                        }
                      }
                    >Editar</button>
                    <button
                      className='rounded-pill btn btn-outline-dark'
                      onClick={
                        () => {
                          handleOnDelete(estado._id);
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

export default Estados;