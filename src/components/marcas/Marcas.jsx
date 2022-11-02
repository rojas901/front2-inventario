import React, { useState, useEffect } from 'react';
import ContainerPage from '../ui/ContainerPage';
import marcaServices from '../../services/marcaService';
import Swal from 'sweetalert2';

const Marcas = () => {

  const [marcas, setMarcas] = useState([]);
  const [marca, setMarca] = useState({
    nombre: '',
    estado: true
  });
  const [editar, setEditar] = useState(false);

  const listarMarcas = async () => {
    try {
      const { data } = await marcaServices.get();
      setMarcas(data);
    } catch (error) {
      console.log(error)
    }    
  }

  useEffect(() => {
    listarMarcas();
  }, []);

  const handleOnChange = (e) => {
    setMarca({ ...marca, [e.target.name]: e.target.value });
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await marcaServices.create(marca);
      Swal.fire({
        icon: 'success',
        title: 'Se ha guardado la informacion',
        showConfirmButton: false,
        timer: 1500
      });
      listarMarcas();
      setMarca({
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
      await marcaServices.update(marca._id, marca);
      Swal.fire({
        icon: 'success',
        title: 'Se ha actualizado la informacion',
        showConfirmButton: false,
        timer: 1500
      });
      listarMarcas();
      handleEditar();
    } catch (error) {
      console.log(error)
    }    
  }

  const eliminarMarca = async (id) => {
    try {
      await marcaServices.delete(id);
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
        eliminarMarca(id);
        Swal.fire(
          'Borrado!',
          'Tu archivo ha sido borrado.',
          'success'
        );
        listarMarcas();
      }
    })    
  }

  const handleEditar = (marca) => {
    setEditar(!editar);
    if (editar === false) {
      setMarca(marca);
    } else {
      setMarca({
        nombre: '',
        estado: ''
      })
    }    
  }

  return (
    <ContainerPage titulo={'Marcas'}>
      <h3 className='text-center'>{editar ? 'Editar' : 'Crear'}</h3>
      <form onSubmit={editar ? handleOnSubmitEditar:handleOnSubmit} className='d-flex justify-content-around'>
        <div className="row g-3">
          <div className="col">
            <input
              type="text"
              className="form-control" placeholder="Nombre"
              name='nombre'
              onChange={handleOnChange}
              value={marca.nombre}
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
              value={marca.estado}
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
            marcas.map((marca, index) => {
              return (
                <tr key={marca._id}>
                  <td className='text-center'>{index + 1}</td>
                  <td className='text-center'>{marca.nombre}</td>
                  <td className='text-center'>{marca.estado === true ? 'Activo' : 'Inactivo'}</td>
                  <td className='text-center'>{marca.fechaCreacion.slice(0, 10)}</td>
                  <td className='text-center'>{marca.fechaActualizacion.slice(0, 10)}</td>
                  <td className="d-flex justify-content-around">
                    <button
                      className='rounded-pill btn btn-outline-dark'
                      onClick={
                        () => {
                          handleEditar(marca);
                        }
                      }
                    >Editar</button>
                    <button
                      className='rounded-pill btn btn-outline-dark'
                      onClick={
                        () => {
                          handleOnDelete(marca._id);
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

export default Marcas;