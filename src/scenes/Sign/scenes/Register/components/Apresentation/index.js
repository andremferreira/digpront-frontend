import React from "react";

export const Apresentation = props => {
  return (
    <div className="col-md-12  p-lg-5 mx-auto ">
      <h4 className=" theme">{props.title} </h4>
      <p className="lead font-weight-normal text-muted">{props.children}</p>
    </div>
  );
};
