import React from "react";

const CardHeader = props => {
  return (
    <section className="card shadow p-3 mb-5 bg-white rounded">
      <div className="card-header bg-transparent">{props.title}</div>
      <div className="card-body">{props.children}</div>
    </section>
  );
};

export default CardHeader;
