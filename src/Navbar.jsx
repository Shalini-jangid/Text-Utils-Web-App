import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link to={"/textutil"} id='link'><a className="navbar-brand" href="#">Text Utils</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Link to={"/clipboard"} id='link'><li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Clip-Board</a>
        </li></Link>
        <Link to={"/accordian"} id='link'><li className="nav-item">
          <a className="nav-link" href="#">Accordion</a>
        </li></Link>
        <Link to={"/box"} id='link'><li className="nav-item">
          <a className="nav-link" href="#">Box</a>
        </li></Link>
        <Link to={"/digiclock"} id='link'><li className="nav-item">
          <a className="nav-link" href="#">Digital Clock</a>
        </li></Link>
       <Link to={"/button"}  id='link'> <li className="nav-item">
          <a className="nav-link" href="#">Buttons</a>
        </li></Link>
       
       
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar