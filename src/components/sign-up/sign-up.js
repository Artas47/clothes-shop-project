import React from "react";
import FormField from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { reduxForm } from "redux-form";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import * as S from "./sign-up.styles";
import { connect } from "react-redux";

const SignUp = props => {
  const { handleSubmit } = props;
  const onSubmit = async formValues => {
    console.log(formValues);
    const { displayName } = formValues;
    if (formValues.password !== formValues.confirmPassword) {
      console.log("passwords not equal");
      return;
    }
    if (!displayName) {
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        formValues.email,
        formValues.password
      );

      await createUserProfileDocument(user, { displayName });
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <S.SignUp>
      <h2>I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          name="displayName"
          component="input"
          type="text"
          htmlFor="displayName"
          text="Display Name"
        />
        <FormField
          name="email"
          component="input"
          type="email"
          htmlFor="email"
          text="Email"
        />
        <FormField
          name="password"
          component="input"
          type="password"
          htmlFor="password"
          text="Password"
        />
        <FormField
          name="confirmPassword"
          component="input"
          type="password"
          htmlFor="confirmPassword"
          text="Confirm Password"
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </S.SignUp>
  );
};

export default connect()(
  reduxForm({
    form: "signUp"
  })(SignUp)
);
