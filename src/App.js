import React from "react";
import HomePage from "./pages/Homepage/Homepage.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Header from "./components/Header/Header.jsx";
import { auth } from "./firebase/firebase.utils";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx";
import { Switch, Route } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header user={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
