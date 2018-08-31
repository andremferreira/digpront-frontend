import React from "react";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import PropTypes from "prop-types";


const renderDateTimePicker = ({
  input: { onChange, value },
  label,
  className,
  col,
  meta: { touched, error },
  showTime
}) => (
  <div className={`form-group col-md-${col}`}>
    <small>
      <label className="font-weight-normal">{label}</label>
    </small>
    <div className={`form-group${touched && error ? " has-error" : ""}`}>
      <DateTimePicker
        className={className}
        format="DD/MM/YYYY"
        value={!value ? null :moment(value).format()}
        time={showTime}
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

export default renderDateTimePicker;
