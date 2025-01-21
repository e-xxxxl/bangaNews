import React from 'react'
import bangalogo from '../../assets/bangalogo.png'
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
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#world">World</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#politics">Politics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#business">Business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#technology">Technology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sports">Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#entertainment">Entertainment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#health">Health</a>
              </li>
            </ul>
            <form className="d-flex mx-auto">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
        
    
    
    </>
  )
}

export default Navbar