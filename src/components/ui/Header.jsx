import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const Header = () => {
  const {user, setUser} = useUser()
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand fs-3 fw-bold text-danger"
          >
            <img src="https://instructure-uploads.s3.amazonaws.com/account_129840000000000001/attachments/8311/LogoPEQ-100.png" alt="IUD" width='50rem' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              {
                localStorage.getItem('Authorization') !== null ?
                  <>
                    <NavLink
                      to="/inventarios"
                      className="nav-item nav-link"
                    >
                      Inventarios
                    </NavLink>
                    <NavLink
                      to="/usuarios"
                      className={user.rol === 'Docente' ?
                    "d-none" : "nav-item nav-link"}
                    >
                      Usuarios
                    </NavLink>
                    <NavLink
                      to="/tiposequipos"
                      className={user.rol === 'Docente' ?
                    "d-none" : "nav-item nav-link"}
                    >
                      Tipos
                    </NavLink>
                    <NavLink
                      to="/estados"
                      className={user.rol === 'Docente' ?
                    "d-none" : "nav-item nav-link"}
                    >
                      Estados
                    </NavLink>
                    <NavLink
                      to="/marcas"
                      className={user.rol === 'Docente' ?
                    "d-none" : "nav-item nav-link"}
                    >
                      Marcas
                    </NavLink>
                    <NavLink
                      to="/"
                      className="nav-item nav-link text-danger"
                      onClick={() => {
                        setUser({})
                        localStorage.removeItem('Authorization')
                      }}
                    >
                      Logout
                    </NavLink>
                  </>
                  :
                  <>
                    <NavLink
                      to="/login"
                      className="nav-item nav-link"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/registro"
                      className="nav-item nav-link"
                    >
                      Registro
                    </NavLink>
                  </>
              }
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;