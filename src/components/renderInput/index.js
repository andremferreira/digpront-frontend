import React from "react";
import PropTypes from "prop-types";

const renderInput = ({
  input,
  label,
  type,
  className,
  col,
  meta: { touched, error },
  disabled
}) => (
  <div className={`form-group col-md-${col}`}>
    <small>
      <label className="font-weight-normal">{label}</label>
    </small>
    <div className={`form-group${touched && error ? " has-error" : ""}`}>
      <input
        {...input}
        disabled={disabled}
        placeholder={label}
        type={type}
        className={className}
      />
      {touched &&
        (error && (
          <small>
            <span className="text-danger">{error}</span>
          </small>
        ))}
    </div>
  </div>
);

renderInput.propTypes = {
  label: PropTypes.string,
  col: PropTypes.string,
  input: PropTypes.object,
  type: PropTypes.string
};
export default renderInput;
