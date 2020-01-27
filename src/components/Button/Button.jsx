import React from "react";
import "./custom-button.styles.scss";

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} custom-button ${
        isGoogleSignIn ? "google-sign-in" : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
