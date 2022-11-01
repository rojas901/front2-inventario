import React, { useState, useEffect } from 'react';
import ContainerPage from '../ui/ContainerPage';
import { useParams, useNavigate } from 'react-router-dom';
import inventarioServices from '../../services/inventarioService';
import usuarioServices from '../../services/usuarioService';
import marcaServices from '../../services/marcaService';
import estadoServices from '../../services/estadoService';
import tipoServices from '../../services/tipoService';
import Swal from 'sweetalert2';

const InventarioEdit = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [estados, setEstados] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [inventario, setInventario] = useState({
    serial: "",
    modelo: "",
    descripcion: "",
    color: "",
    fotoEquipo: "",
    fechaCompra: "",
    precio: "",
    usuario: "",
    marca: "",
    tipo: "",
    estado: ""
  });

  const listarInventario = async () => {
    const { data } = await inventarioServices.getById(id);
    setInventario(data);
  }

  const listarUsuarios = async () => {
    try {
      const { data } = await usuarioServices.get();
      setUsuarios(data);
    } catch (error) {
      console.log(error)
    }
  }

  const listarMarcas = async () => {
    try {
      const { data } = await marcaServices.get();
      setMarcas(data);
    } catch (error) {
      console.log(error)
    }
  }

  const listarEstados = async () => {
    try {
      const { data } = await estadoServices.get();
      setEstados(data);
    } catch (error) {
      console.log(error)
    }
  }

  const listarTipos = async () => {
    try {
      const { data } = await tipoServices.get();
      setTipos(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    listarInventario();
    listarUsuarios();
    listarMarcas();
    listarEstados();
    listarTipos();
    // eslint-disable-next-line
  }, [id]);

  const handleOnChange = (e) => {
    setInventario({ ...inventario, [e.target.name]: e.target.value });
    console.log(inventario)
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      Swal.showLoading();
      await inventarioServices.update(id, inventario);
      Swal.close();
      navigate('/inventarios');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ContainerPage titulo={'Editar Inventario'}>
      {
        inventario ?
          <form onSubmit={handleOnSubmit}>
            <div className="row g-3 mb-2">
              <div className="col">
                <input
                  type="text"
                  className="form-control" placeholder="Serial"
                  name='serial'
                  onChange={handleOnChange}
                  value={inventario.serial}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control" placeholder="Modelo"
                  name='modelo'
                  onChange={handleOnChange}
                  value={inventario.modelo}
                  required
                />
              </div>
            </div>
            <div className="row g-1 mb-2">
              <div className="col">
                <input
                  type="text"
                  className="form-control" placeholder="Descripcion"
                  name='descripcion'
                  onChange={handleOnChange}
                  value={inventario.descripcion}
                  required
                />
              </div>
            </div>
            <div className="row g-3 mb-2">
              <div className="col">
                <input
                  type="url"
                  className="form-control" placeholder="Foto de equipo (URL)"
                  name='fotoEquipo'
                  onChange={handleOnChange}
                  value={inventario.fotoEquipo}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fecha compra (aaaa/mm/dd)"
                  name='fechaCompra'
                  onChange={handleOnChange}
                  onFocus={e => e.target.type = 'date'}
                  value={inventario.fechaCompra}
                  required
                />
              </div>
            </div>
            <div className="row g-3 mb-2">
              <div className='col'>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio"
                  name='precio'
                  onChange={handleOnChange}
                  value={inventario.precio}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control" placeholder="Color"
                  name='color'
                  onChange={handleOnChange}
                  value={inventario.color}
                  required
                />
              </div>
            </div>
            <div className="row g-3 mb-2">
              <div className="input-group col">
                <label
                  className="input-group-text" htmlFor="inputGroupSelect01"
                >
                  Usuario
                </label>
                <select
                  className="form-select" id="inputGroupSelect01"
                  name='usuario'
                  onChange={handleOnChange}
                  value={inventario.usuario}
                  required
                >
                  <option value=''>--Seleccione--</option>
                  {
                    usuarios.map(usuario => {
                      return <option
                        key={usuario._id}
                        value={usuario._id}>{usuario.nombre}</option>
                    })
                  }
                </select>
              </div>
              <div className="input-group col">
                <label
                  className="input-group-text" htmlFor="inputGroupSelect02"
                >
                  Marca
                </label>
                <select
                  className="form-select" id="inputGroupSelect02"
                  name='marca'
                  onChange={handleOnChange}
                  value={inventario.marca}
                  required
                >
                  <option value=''>--Seleccione--</option>
                  {
                    marcas.map(marca => {
                      return <option
                        key={marca._id}
                        value={marca._id}>{marca.nombre}</option>
                    })
                  }
                </select>
              </div>
            </div>
            <div className="row g-3 mb-3">
              <div className="input-group col">
                <label
                  className="input-group-text" htmlFor="inputGroupSelect03"
                >
                  Estado
                </label>
                <select
                  className="form-select" id="inputGroupSelect03"
                  name='estado'
                  onChange={handleOnChange}
                  value={inventario.estado}
                  required
                >
                  <option value=''>--Seleccione--</option>
                  {
                    estados.map(estado => {
                      return <option
                        key={estado._id}
                        value={estado._id}>{estado.nombre}</option>
                    })
                  }
                </select>
              </div>
              <div className="input-group col">
                <label
                  className="input-group-text" htmlFor="inputGroupSelect04"
                >
                  Tipo
                </label>
                <select
                  className="form-select" id="inputGroupSelect04"
                  name='tipo'
                  onChange={handleOnChange}
                  value={inventario.tipo}
                  required
                >
                  <option value=''>--Seleccione--</option>
                  {
                    tipos.map(tipo => {
                      return <option
                        key={tipo._id}
                        value={tipo._id}>{tipo.nombre}</option>
                    })
                  }
                </select>
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <button
                className='rounded-pill btn btn-outline-dark'
              >
                Enviar
              </button>
            </div>
          </form>
          :
          <h1>No hay datos</h1>
      }

    </ContainerPage>
  );
}

export default InventarioEdit;