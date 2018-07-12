import React from "react";

export const NavBar = props => {
  return (
    <nav
      className={`navbar top-navbar navbar-expand-md ${props.color} ${
        props.bg
      } ${props.shadow}`}
    >
      <a className="navbar-brand col-md-2" href="#">
        {props.title}
      </a>
      <ul className="nav navbar-nav mr-auto" />
      {props.children}
    </nav>
  );
};
