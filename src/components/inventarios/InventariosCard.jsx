import React from 'react';
import { Link } from 'react-router-dom';
import inventarioServices from '../../services/inventarioService';
import Swal from 'sweetalert2';

const InventariosCard = ({ inventarios, listar, user}) => {

  const eliminarInventario = async (id) => {
    try {
      await inventarioServices.delete(id);
    } catch (error) {
      console.log(error);
    }    
  }

  const handleOnClick = (id) => {
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
        eliminarInventario(id);
        Swal.fire(
          'Borrado!',
          'Tu archivo ha sido borrado.',
          'success'
        );
        listar();
      }
    })    
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
      {        
        inventarios.map((inventario) => {
          return (
            <div className="col" key={inventario._id}>
              <div className="card text-bg-dark">
                <img src={inventario.fotoEquipo} className="card-img-top" alt={inventario.tipo.nombre} height="250rem" />
                <div className="card-body">
                  <h5 className="card-title text-center">Caracteristicas</h5>
                  <hr />
                  <ul className='list-unstyled'>
                    <li>
                      <strong>Serial: </strong> {inventario.serial}
                    </li>
                    <li>
                      <strong>Modelo: </strong>{inventario.modelo}
                    </li>
                    <li>
                      <strong>Descripcion: </strong>{inventario.descripcion}
                    </li>
                    <li>
                      <strong>Color: </strong>{inventario.color}
                    </li>
                    <li>
                      <strong>Fecha de compra: </strong>{inventario.fechaCompra}
                    </li>
                    <li>
                      <strong>Precio: </strong>{inventario.precio}
                    </li>
                    <li>
                      <strong>Usuario: </strong>{inventario.usuario.nombre}
                    </li>
                    <li>
                      <strong>Marca: </strong>{inventario.marca.nombre}
                    </li>
                    <li>
                      <strong>Estado: </strong>{inventario.estado.nombre}
                    </li>
                    <li>
                      <strong>Tipo: </strong>{inventario.tipo.nombre}
                    </li>
                    <li className={user.rol === 'Docente' ? "d-none" : "d-flex justify-content-around mt-2"}>
                      <Link to={`${inventario._id}`}>
                      <button
                        className='rounded-pill btn btn-light'
                      >Editar
                      </button>
                      </Link>
                      <button className='rounded-pill btn btn-light'
                      onClick={
                        () => {
                          handleOnClick(inventario._id);
                        }
                      }
                      >
                        Borrar
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default InventariosCard;