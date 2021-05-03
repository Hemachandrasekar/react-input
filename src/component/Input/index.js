import React from "react";
import "./input.css";

const Input = (props) => {
  const getInputclassname = () => {
    return `input ${props.error ? "input-error" : ""}
    ${props.disabled ? "input-disabled" : ""}
    ${props.size === "sm" ? "input-sm" : ""}
    ${props.size === "md" ? "input-md" : ""}
    ${props.fullWidth ? "input-fullwidth" : ""}
    ${props.multiline && props.row === "4" ? "input-multiline" : ""}
    `;
  };
  const getLabelclassname = () => {
    return `label ${props.error ? "label-error" : ""}`;
  };
  const getParaclassname = () => {
    return `${props.helperText ? "Some interesting text" : ""}
    ${props.error && props.helperText ? "para-error" : ""}
    `;
  };
  const getPara = () => {
    return `label ${props.error ? "label-error" : ""}`;
  };
  const getTextclassname = () => {
    return `${props.value === "text" ? "Text" : ""}`;
  };

  return (
    <div className="input-wrapper">
      <span className={getLabelclassname()}>label</span>
      <div className="input-border">
        <span className="material-icons">phone</span>
        <input
          className={getInputclassname()}
          placeholder=" Placeholder"
          value={getTextclassname()}
        />
      </div>
      <span className={getPara()}>{getParaclassname()}</span>
    </div>
  );
};
export default Input;
