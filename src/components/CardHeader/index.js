import React from "react";

const CardHeader = props => {
  return (
    <section className="card shadow p-3 mt-3 bg-white">
      {props.title && (
        <div className="card-header bg-transparent">{props.title}</div>
      )}
      <div className="card-body">{props.children}</div>
    </section>
  );
};

export default CardHeader;
