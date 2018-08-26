import React from "react";
import PropTypes from "prop-types";

const renderSelect = ({
  input,
  label,
  className,
  col,
  meta: { touched, error },
  data
}) => (
  <div className={`form-group col-md-${col}`}>
    <small>
      <label className="font-weight-normal">{label}</label>
    </small>
    <div className={`form-group${touched && error ? " has-error" : ""}`}>
      <select {...input} className={className}>
        <option value="">Selecione...</option>
        {data.length > 0 &&
          data.map((c, index) => (
            <option value={c.name} key={index}>
              {c.name}
            </option>
          ))}
      </select>
      {touched &&
        (error && (
          <small>
            <span className="text-danger">{error}</span>
          </small>
        ))}
    </div>
  </div>
);

renderSelect.propTypes = {
  label: PropTypes.string,
  col: PropTypes.string,
  input: PropTypes.object
};
export default renderSelect;
