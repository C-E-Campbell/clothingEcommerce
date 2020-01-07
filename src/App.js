import React from "react";
import HomePage from "./pages/Homepage/Homepage.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Header from "./components/Header/Header.jsx";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
