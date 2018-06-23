import React from "react";

const Button = props => (
  <button
    type="submit"
    className={`btn btn-${props.color} btn-block`}
    disabled={props.submitting}
    onClick={props.onClick}
  >
    {props.name}
  </button>
);
//className={`btn btn-${submitClass}`}

export default Button;
