import React from "react";

import PropTypes from "prop-types";

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

CardHeader.propTypes = {
  shadow: PropTypes.string,
  title: PropTypes.string
};

export default CardHeader;
