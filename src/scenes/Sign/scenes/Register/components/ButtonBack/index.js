import React from "react";

const ButtonBack = props => (
  <button
    //type="submit"
    className="btn btn-outline-primary mr-3 col-2"
   // disabled={props.submitting}
    onClick={props.onClick}
  >
    {props.name}
  </button>
);
//className={`btn btn-${submitClass}`}

export default ButtonBack;
