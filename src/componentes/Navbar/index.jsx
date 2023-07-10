import './index.css'
import React from 'react'
import CartWidget from '../CartWidget'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Mendoza Gaming</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">inicio <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contacto</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#"></a>
                </li>
              </ul>
              <CartWidget valor="0"/>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;