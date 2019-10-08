import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
import * as S from "./sign-in-and-sign-up.styles";

const SignInAndSignUp = () => {
  return (
    <S.SignInAndSignUp>
      <SignIn />;
      <SignUp />
    </S.SignInAndSignUp>
  );
};

export default SignInAndSignUp;
