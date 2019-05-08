import React from "react";

const buttonTypes = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  success: "btn btn-success",
  danger: "btn btn-danger",
  warning: "btn btn-warning",
  info: "btn btn-info",
  light: "btn btn-light",
  dark: "btn btn-dark"
};

const buttonActionTypes = {
  add: "fas fa-plus",
  delete: "fas fa-trash-alt",
  save: "fas fa-save",
  edit: "fas fa-pen",
  back: "fas fa-arrow-left"
};

const Button = props => {
  const buttonClass = buttonTypes[props.type] || "btn btn-primary";
  const iconClass = buttonActionTypes[props.intendedAction] || "";

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <i className={iconClass} /> {props.text}
    </button>
  );
};

export default Button;
