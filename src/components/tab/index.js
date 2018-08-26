import React from "react";
import PropTypes from "prop-types";

class Tab extends React.Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label }
    } = this;

    let className = "nav-item";
    if (activeTab === label) {
      className += " nav-link active";
    }
    return (
      <li className={className} onClick={onClick}>
        {label}
      </li>
    );
  }
}

export default Tab;
