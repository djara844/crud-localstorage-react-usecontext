import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/create">
        useContext
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="./create">
            Create
          </NavLink>
          <NavLink className="nav-item nav-link" to="./read">
            Read
          </NavLink>
          <NavLink className="nav-item nav-link" to="./update">
            Update
          </NavLink>
          <NavLink className="nav-item nav-link " to="./delete">
            Delete
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
