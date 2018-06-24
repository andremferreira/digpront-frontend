import React from "react";

const Button = props => (
  <button
    type="submit"
    className={`btn btn-${props.color} btn-block bg-purple shadow-sm`}
    disabled={props.submitting}
    onClick={props.onClick}
  >
    {props.name}
  </button>
);

export default Button;
