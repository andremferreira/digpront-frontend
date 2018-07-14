import React from "react";
import PropTypes from "prop-types";

const Button = props => (
  <button
    type="submit"
    className={`btn btn-${props.color} btn-block shadow-sm`}
    disabled={props.submitting}
    onClick={props.onClick}
  >
    {props.name}
  </button>
);

Button.propTypes = {
  submitting: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string
};

export default Button;
