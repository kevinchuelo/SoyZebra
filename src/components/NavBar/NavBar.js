
import CartWidget from '../CartWidget/CartWidget';

// import './Navbar.css'
import { NavLink } from 'react-router-dom'

const NavBar= () => {
    return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid ">
    <NavLink to= "/" className="navbar-brand" href="#" id='titulo'>Zebra</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav Categories me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to={'/'} className="nav-link active" aria-current="page" href="#">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/category/redes'} className="nav-link" href="#">Redes</NavLink>
        </li>
        <li className="nav-item dropdown">

          <NavLink to={'/category/productos'} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Productos
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink to={'/category/Productos/Lenceria'} className="dropdown-item" href="#">Lenceria</NavLink></li>
            <li><NavLink to={'/category/Productos/Corseteria'} className="dropdown-item" href="#">Corseteria</NavLink></li>
            <li><NavLink to={'/category/Productos/Bikinis'} className="dropdown-item" href="#">Bikinis</NavLink></li>
            <li><NavLink to={'/category/Productos/Accesorios'} className="dropdown-item" href="#">Accesorios</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink to={'/category/a Medida'} className="nav-link" href="#">A Medida</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input> 
        <button className="btn btn-outline-dark" type="submit">Buscar</button>
      </form>
    </div>
  </div>
  <CartWidget/>
  </nav>
  );
  }
//className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}
export default NavBar;