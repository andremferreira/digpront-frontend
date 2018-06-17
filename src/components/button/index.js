import React from "react";

const Button = props => (
  <button type="submit" className="btn btn-primary btn-block ">
   {props.name}
  </button>
);
//className={`btn btn-${submitClass}`}

export default Button;
