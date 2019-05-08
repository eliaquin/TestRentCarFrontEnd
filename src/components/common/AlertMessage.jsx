import React from "react";

const AlertMessage = ({ responseInfo }) => {
  const alertClass = responseInfo.operationSuccessful
    ? "alert alert-success"
    : "alert alert-danger";
  if (Object.keys(responseInfo).length > 0)
    return (
      <div className={alertClass} role="alert">
        {responseInfo.message}
      </div>
    );
  return null;
};

export default AlertMessage;
