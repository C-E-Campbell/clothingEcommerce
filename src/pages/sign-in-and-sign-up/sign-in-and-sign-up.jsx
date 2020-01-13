import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import "./sign-in-and-sign-up.scss";
import SignUp from "../../components/SignUp/SignUp";
const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
