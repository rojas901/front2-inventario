import React, { useState, useEffect } from 'react';
import inventarioServices from '../../services/inventarioService';

const Inventarios = () => {

  const [inventarios, setInventarios] = useState([]);

  const listarInventarios = async () => {
    try {
      const { data } = await inventarioServices.get();
      setInventarios(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    listarInventarios();
  }, []);

  return (
    <div className='container-fluid'>
      <h1 className='text-center'>Inventarios</h1>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
        {
          inventarios.map((inventario) => {
            return (
              <div className="col">
                <div className="card">
                  <img src={inventario.fotoEquipo} className="card-img-top" alt={inventario.tipo.nombre} height="300rem"/>
                  <div className="card-body">
                    <h5 className="card-title text-center">Caracteristicas</h5>
                    <hr />
                    <p className="card-text">
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
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Inventarios;