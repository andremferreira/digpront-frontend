import React from "react";

const Button = props => {
  const outline = props.outline !== undefined ? props.outline : "";
  return (
    <button
     // type="submit"
      className={`btn ${outline} mr-3 `}
      disabled={props.submitting || props.invalid}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
