import React from "react";

const ErrorDisplay = props => {
  const error = props.error;
  return error !== undefined && error !== null && error.length > 0 ? (
    <span className="text-danger small">{error}</span>
  ) : null;
};

export default ErrorDisplay;
