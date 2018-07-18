import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const LinkMenu = props => {
  const btn = props.btn ? "btn btn-outline-primary btn-sm" : undefined;
  return (
    <NavLink
      className={`nav-link ${btn} m-2 `}
      //activeClassName="active"
      to={props.url}
      exact
    >
      {props.label}
      {/* {props.size &&
          props.icon && <Icon size={props.size} icon={props.icon} />}
        {props.label && <span className="pl-2">{props.label}</span>} */}
    </NavLink>
  );
};

LinkMenu.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  btn: PropTypes.bool
};

export default LinkMenu;
