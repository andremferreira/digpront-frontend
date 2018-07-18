import React from "react";
import PropTypes from "prop-types";
import LinkMenu from "../linkMenu";

const NavMenu = props => {
  return (
    <nav className="col-md-2 border-right bg-transparent d-md-block sidebar mt-2">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          {props.items.length > 0 &&
            props.items.map(item => (
              <li key={item.label} className="nav-item">
                <LinkMenu url={item.url} label={item.label} />
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

NavMenu.propTypes = {
  items: PropTypes.array.isRequired
};

export default NavMenu;
