import React from 'react';

const InventarioNew = () => {
  return (
    <>
      <form>
        <div className="row g-3 mb-2">
          <div className="col">
            <input type="text" className="form-control" placeholder="Serial" aria-label="Serial" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Modelo" aria-label="Modelo" />
          </div>
        </div>
        <div className="row g-1 mb-2">
          <textarea
            class="form-control"
            rows="2"
            placeholder="Descripcion"
            aria-label="Descripcion"
          >
          </textarea>
        </div>
        <div className="row g-3 mb-2">
          <div className="col">
            <input type="text" className="form-control" placeholder="Foto de equipo (URL)" aria-label="Foto de equipo" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Fecha de compra (aaaa-mm-dd)" aria-label="Fecha de compra" />
          </div>
        </div>
        <div className="row g-1 mb-2">
          <input
            type="number"
            class="form-control"
            placeholder="Precio"
            aria-label="Precio"
          />
        </div>
        <div className="row g-3 mb-2">
          <div class="input-group col">
            <label class="input-group-text" for="inputGroupSelect01">Usuario</label>
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="input-group col">
            <label class="input-group-text" for="inputGroupSelect02">Marca</label>
            <select class="form-select" id="inputGroupSelect02">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>          
        </div>
        <div className="row g-3 mb-3">
          <div class="input-group col">
            <label class="input-group-text" for="inputGroupSelect03">Estado</label>
            <select class="form-select" id="inputGroupSelect03">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="input-group col">
            <label class="input-group-text" for="inputGroupSelect04">Tipo</label>
            <select class="form-select" id="inputGroupSelect04">
              <option selected>Choose...</option>
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