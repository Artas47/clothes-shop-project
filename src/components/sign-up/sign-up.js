import React from "react";
import { reduxForm, Field } from "redux-form";
import * as S from "./sign-up.styles";
import { connect } from "react-redux";
import formField from "../form-field/form-field";
import { signUpStart } from "../../actions/index";

const SignUp = props => {
  const { handleSubmit } = props;
  const onSubmit = async formValues => {
    const { displayName, email, password } = formValues;
    props.signUpStart({ displayName, email, password });
  };
  return (
    <S.SignUp>
      <h2>I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="displayName"
          type="input"
          component={formField}
          label="Display Name"
        />
        <Field name="email" type="email" component={formField} label="Email" />
        <Field
          name="password"
          component={formField}
          type="password"
          label="Password"
        />
        <Field
          name="confirmPassword"
          component={formField}
          type="password"
          label="Confirm Password"
        />
        <S.FormCustomButton type="submit">SIGN UP</S.FormCustomButton>
      </S.StyledForm>
    </S.SignUp>
  );
};

const validate = formValues => {
  const errors = {};
  if (!formValues.displayName) {
    errors.displayName = "You must enter a display name";
  }
  if (!formValues.email) {
    errors.email = "You must enter an email";
  }
  if (!formValues.password) {
    errors.password = "You must enter a password";
  }
  if (formValues.password !== formValues.confirmPassword) {
    errors.password = "Passwords are not the same";
  }
  return errors;
};

export default connect(
  null,
  { signUpStart }
)(
  reduxForm({
    form: "signUp",
    touchOnBlur: false,
    validate: validate
  })(SignUp)
);
