import React from "react";

const AlertMessage = props => {
  const alertClass = props.responseInfo.operationSuccessful
    ? "alert alert-success"
    : "alert alert-danger";
  if (Object.keys(props.responseInfo).length > 0)
    return (
      <div className={alertClass} role="alert">
        {props.responseInfo.message}
      </div>
    );
  return null;
};

export default AlertMessage;
