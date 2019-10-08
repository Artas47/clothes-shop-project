import React from "react";
import * as S from "./form-input.styles";

const FormField = props => {
  return (
    <S.FormField>
      <S.StyledLabel htmlFor={props.htmlFor}>{props.text}</S.StyledLabel>
      <S.StyledField
        name={props.name}
        component={props.component}
        type={props.type}
      />
    </S.FormField>
  );
};

export default FormField;
