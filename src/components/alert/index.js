import React from "react";

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

export default Alert;
