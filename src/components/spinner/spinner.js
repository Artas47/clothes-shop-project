import React from "react";
import * as S from "./spinner.styles";

export const Spinner = () => {
  return (
    <S.SpinnerOverlay>
      <S.SpinnerContainer />
    </S.SpinnerOverlay>
  );
};
export default Spinner;
