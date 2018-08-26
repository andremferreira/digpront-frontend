import React from "react";
import * as Typicons from "react-icons/lib/ti";
import { NavLink } from "react-router-dom";

class DropDown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: false
    };
  }
 
  show = e => {
    e.preventDefault();
    this.setState({ isToggleOn: true }, () => {
      document.addEventListener("click", this.close);
    });
  };

  close = () => {
    this.setState({ isToggleOn: false }, () => {
      document.removeEventListener("click", this.close);
    });
  };

  logout = () => {
    this.props.onClick();
  };

  render() {
    const classDropdownMenu =
      "dropdown-menu dropdown-menu-right border-0 m-2" +
      (this.state.isToggleOn ? " show" : "");
    return (
      <div className="dropdown">
        <button
          className="btn btn-transparent shadow-sm "
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          onClick={e => {
            this.show(e);
          }}
          aria-haspopup="true"
          aria-expanded="false"
        >
          <Typicons.TiUser size="20" />
        </button>
        <div className={classDropdownMenu} aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">
            Perfil
          </a>
          <NavLink
            className="dropdown-item"
            to="/home"
            onClick={this.logout}
          >
            Sair
          </NavLink>
        </div>
      </div>
    );
  }
}

export default DropDown;
