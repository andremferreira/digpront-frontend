import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import PropTypes from "prop-types";

const renderDatePicker = ({
  input,
  label,
  className,
  col,
  meta: { touched, error }
}) => (
  <div className={`form-group col-md-${col}`}>
    <small>
      <label className="font-weight-normal">{label}</label>
    </small>
    <div className={`form-group${touched && error ? " has-error" : ""}`}>
      <DatePicker
        className={className}
        {...input}
        dateFormat="DD/MM/YYYY"
        selected={input.value ? moment(input.value) : null}
      />
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
);

renderDatePicker.propTypes = {
  label: PropTypes.string,
  col: PropTypes.string,
  input: PropTypes.object
};

export default renderDatePicker;
