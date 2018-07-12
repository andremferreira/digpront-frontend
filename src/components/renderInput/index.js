import React from "react";

const renderInput = ({
  input,
  label,
  type,
  className,
  col,
  meta: { touched, error }
}) => (
  <div className={`form-group col-md-${col}`}>
    <small>
      <label className="font-weight-normal">{label}</label>
    </small>
    <div className={`form-group${touched && error ? " has-error" : ""}`}>
      <input {...input} placeholder={label} type={type} className={className} />
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
);

export default renderInput;
