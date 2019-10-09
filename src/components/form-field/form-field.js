import React from "react";
import * as S from "./form-field.styles";

const FormField = props => {
  const {
    label,
    input,
    type,
    meta: { touched, error }
  } = props;
  return (
    <div>
      <label>{label}</label>
      <div>
        <S.FormField {...input} type={type} />
        {touched && error ? <span style={{ color: "red" }}>{error}</span> : ""}
      </div>
    </div>
  );
};

export default FormField;
