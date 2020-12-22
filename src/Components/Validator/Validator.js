import React from "react";

export default function Validator(props) {
  if (!props.isValid) {
    return <div className="form-validation-error">{props.msg}</div>;
  }
  return null;
}
