import React, { useEffect } from "react";
import * as S from "./sign-in.styles";
import { reduxForm } from "redux-form";
import FormInput from "../form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const SignIn = props => {
  const { handleSubmit } = props;
  const onSubmit = formValues => {
    console.log("gfd");
  };
  return (
    <S.SignIn>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name="email"
          component="input"
          type="email"
          htmlFor="email"
          text="Email"
        />
        <FormInput
          name="password"
          component="input"
          type="password"
          htmlFor="password"
          text="Password"
        />
        <CustomButton type="submit"> Sign In </CustomButton>
        <CustomButton googleButton onClick={signInWithGoogle}>
          SIGN IN WITH GOOGLE
        </CustomButton>
      </S.StyledForm>
    </S.SignIn>
  );
};

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "signIn"
  })(SignIn)
);
