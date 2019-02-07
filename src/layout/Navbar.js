import React from 'react'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Navbar({title}) {
  
  return (
    
    <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
      <a href="/" className="navbar-brand">{title}</a>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link to = "/" className = "nav-link">Home</Link>
        </li>
        <li className="nav-item active">
          <Link to = "/add" className = "nav-link">Add User</Link>
       </li>
       <li className="nav-item active">
       <Link to = "/github" className = "nav-link">Project Files</Link>
    </li>
      
      </ul>
    
    </nav>
    
  )
}
Navbar.propTypes = {
  title : PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title : "Default App"
}
export default Navbar;
