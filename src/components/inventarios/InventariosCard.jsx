import React from 'react';

const InventariosCard = ({inventarios}) => {
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
                    <li className="d-flex justify-content-around mt-2">
                      <button className='rounded-pill'>Editar</button>
                      <button className='rounded-pill'>Borrar</button>
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