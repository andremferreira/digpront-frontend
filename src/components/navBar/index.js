import React from "react";

import PropTypes from "prop-types";

const NavBar = props => {
  return (
    <nav
      className={`navbar top-navbar navbar-expand-md ${props.color} ${
        props.bg
      } ${props.shadow}`}
    >
      <a className="navbar-brand col-md-2" href="#">
        {props.title}
      </a>
      <ul className="nav navbar-nav mr-auto">
       
      </ul>
      {props.children}
    </nav>
  );
};

NavBar.propTypes = {
  color: PropTypes.string,
  bg: PropTypes.string,
  shadow: PropTypes.string,
  title: PropTypes.string
};

export default NavBar;
