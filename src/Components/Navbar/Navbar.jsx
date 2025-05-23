import React from 'react'
import bangalogo from '../../assets/bangalogo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm animate-navbar">
      <div className="container-fluid">
        <a className="navbar-brand me-5" href="#home">
          <img className='bangalogo' src={bangalogo} alt="bangaLogo"  height="40" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/politics">Politics</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/technology">Technology</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/health">Health</Link>
              </li>
              
            </ul>
            <form className="d-flex mx-auto">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search?</button>
            </form>

            <ul className="navbar-nav"> 
            <li className="nav-item "> 
                  <Link className="nav-link" to="/admin/signin">Admin</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
        
    
    
    </>
  )
}

export default Navbar