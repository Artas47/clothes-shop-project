import React from "react";
import * as S from "./sign-in.styles";
import { reduxForm, Field } from "redux-form";
import { useDispatch } from "react-redux";
import formField from "../form-field/form-field";
import { googleSignInStart, emailSignInStart } from "../../actions/index";

const SignIn = props => {
  const dispatch = useDispatch();
  const { handleSubmit } = props;
  const onSubmit = async (formValues, dispatch) => {
    const { email, password } = formValues;
    dispatch(emailSignInStart({ email, password }));
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
        <S.FormCustomButton type="submit"> Sign In </S.FormCustomButton>
      </S.StyledForm>
      <S.FormCustomButton
        googleButton
        onClick={() => {
          dispatch(googleSignInStart());
        }}
      >
        SIGN IN WITH GOOGLE
      </S.FormCustomButton>
    </S.SignIn>
  );
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

export default reduxForm({
  form: "signIn",
  validate
})(SignIn);
