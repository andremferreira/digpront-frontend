import React from "react";
import * as Typicons from "react-icons/lib/ti";

class DropDown extends React.Component {
  state = {
    isToggleOn: false
  };

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
          <a className="dropdown-item" href="#">
            Sair
          </a>
        </div>
      </div>
    );
  }
}

export default DropDown;
