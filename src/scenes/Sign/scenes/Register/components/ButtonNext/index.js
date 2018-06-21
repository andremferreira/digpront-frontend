import React from "react";

const ButtonNext = props => (
  <button
    //type="submit"
    className="btn btn-primary col-2"
   // disabled={props.submitting}
    onClick={props.onClick}
  >
    {props.name}
  </button>
);
//className={`btn btn-${submitClass}`}

export default ButtonNext;
