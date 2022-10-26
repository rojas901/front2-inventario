import React from 'react';

const InventarioNew = () => {
  return (
    <>
      <form>
        <div className="row g-3 mb-2">
          <div className="col">
            <input type="text" className="form-control" placeholder="Serial"
            name='serial' />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Modelo"
            name='modelo' />
          </div>
        </div>
        <div className="row g-1 mb-2">
          <textarea
            className="form-control"
            rows="2"
            placeholder="Descripcion"
            name='descripcion'
          >
          </textarea>
        </div>
        <div className="row g-3 mb-2">
          <div className="col">
            <input type="text" className="form-control" placeholder="Foto de equipo (URL)"
            name='fotoEquipo' />
          </div>
          <div className="col">
            <input type="date" className="form-control" name='fechaCompra' />
          </div>
        </div>
        <div className="row g-3 mb-2">
          <div className='col'>
            <input
              type="number"
              className="form-control"
              placeholder="Precio"
              name='precio'
            />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Color" 
            name='color' />
          </div>
        </div>
        <div className="row g-3 mb-2">
          <div className="input-group col">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Usuario</label>
            <select className="form-select" id="inputGroupSelect01" name='usuario'>
              <option selected disabled>Elige un usuario</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="input-group col">
            <label className="input-group-text" htmlFor="inputGroupSelect02">Marca</label>
            <select className="form-select" id="inputGroupSelect02" name='marca'>
              <option selected disabled>Elige una marca</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>          
        </div>
        <div className="row g-3 mb-3">
          <div className="input-group col">
            <label className="input-group-text" htmlFor="inputGroupSelect03">Estado</label>
            <select className="form-select" id="inputGroupSelect03" name='estado'>
              <option selected disabled>Elige un estado</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="input-group col">
            <label className="input-group-text" htmlFor="inputGroupSelect04">Tipo</label>
            <select className="form-select" id="inputGroupSelect04" name='tipo'>
              <option selected disabled>Elige un tipo</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>          
        </div>
        <div className='d-flex justify-content-center'>
          <button className='rounded-pill btn btn-outline-dark'
          >Enviar</button>
        </div>
      </form>
    </>
  );
}

export default InventarioNew;