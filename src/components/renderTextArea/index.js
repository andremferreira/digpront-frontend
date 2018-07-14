import React from "react";
import PropTypes from "prop-types";

const renderTextArea = ({
  input,
  label,
  type,
  className,
  col,
  meta: { touched, error }
}) => (
  <div className={`form-group col-md-${col}`}>
    <small><label className="font-weight-normal">{label}</label></small>
    <div className={`form-group${touched && error ? " has-error" : ""}`}>
      <textarea {...input} type={type} className={className} />
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
);

renderTextArea.propTypes = {
  label: PropTypes.string,
  col: PropTypes.string,
  input: PropTypes.object,
  type: PropTypes.string
};

export default renderTextArea;
