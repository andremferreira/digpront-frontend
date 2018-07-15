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
              <LinkMenu key={item.label} url={item.url} label={item.label} />
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
