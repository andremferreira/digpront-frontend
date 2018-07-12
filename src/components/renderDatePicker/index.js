import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

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
        dateFormat="MM/DD/YYYY"
        selected={input.value ? moment(input.value) : null}
      />
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
);

export default renderDatePicker;
