import React from "react";

import PropTypes from "prop-types";

const Alert = ({ errors, data }) => {
  const css = errors ? "error" : data ? "success" : "";
  return (
    <div>
      {css && (
        <div className={`alert ${css}`} role="alert">
          {errors}
          {data}
        </div>
      )}
    </div>
  );
};

Alert.propTypes = {
  errors: PropTypes.string,
  data: PropTypes.string
};

export default Alert;
