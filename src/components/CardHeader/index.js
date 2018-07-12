import React from "react";

const CardHeader = props => {
  return (
    <section className={`card ${props.shadow} p-3 mt-3 bg-white mb-3`}>
      {props.title && (
        <div className="card-header bg-transparent">{props.title}</div>
      )}
      <div className="card-body">{props.children}</div>
    </section>
  );
};

export default CardHeader;
