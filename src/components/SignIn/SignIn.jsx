import React from "react";
import "./SignIn.scss";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils.js";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            required
          />

          <FormInput
            handleChange={this.handleChange}
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            required
          />
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
