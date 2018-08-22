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
        <option value="">Select a color...</option>
        {data.map(c => (
          <option value={c.name} key={c.isn}>
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
  input: PropTypes.object,
  data: PropTypes.array.isRequired
};
export default renderSelect;
