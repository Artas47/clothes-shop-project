import React, { useEffect } from "react";
import * as S from "./sign-in.styles";
import { reduxForm, Field } from "redux-form";
import CustomButton from "../../components/custom-button/custom-button";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import formField from "../form-field/form-field";
import { getUser } from "../../selectors/user.selector";

const SignIn = props => {
  const { handleSubmit } = props;
  const onSubmit = async formValues => {
    try {
      await auth.signInWithEmailAndPassword(
        formValues.email,
        formValues.password
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <S.SignIn>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Field name="email" type="email" component={formField} label="Email" />
        <Field
          name="password"
          type="password"
          component={formField}
          label="Password"
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
  return { user: getUser(state) };
};

const validate = formValues => {
  const errors = {};
  if (!formValues.email) {
    errors.email = "You must enter an email";
  }
  if (!formValues.password) {
    errors.password = "You must enter a password";
  }
  return errors;
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "signIn",
    validate
  })(SignIn)
);
