import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const LinkMenu = props => {
  return (
    <li className="nav-item">
      <NavLink
        className="nav-link"
        //activeClassName="active"
        to={props.url}
        exact
      >
        {props.label}
        {/* {props.size &&
          props.icon && <Icon size={props.size} icon={props.icon} />}
        {props.label && <span className="pl-2">{props.label}</span>} */}
      </NavLink>
    </li>
  );
};

LinkMenu.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default LinkMenu;
