import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link 
            to="/"
            className="navbar-brand fs-3 fw-bold text-danger"
          >
            IUD
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <NavLink 
                to="/inventarios"
                className="nav-item nav-link"
              >
                Inventarios
              </NavLink>
              <NavLink 
                to="/usuarios"
                className="nav-item nav-link"
              >
                Usuarios
              </NavLink>
              <NavLink 
                to="/tiposequipos"
                className="nav-item nav-link"
              >
                Tipos
              </NavLink>
              <NavLink 
                to="/estados"
                className="nav-item nav-link"
              >
                Estados
              </NavLink>
              <NavLink 
                to="/marcas"
                className="nav-item nav-link"
              >
                Marcas
              </NavLink> 
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;