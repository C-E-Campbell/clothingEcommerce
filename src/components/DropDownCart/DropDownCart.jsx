import React from "react";
import Button from "../Button/Button";
import "./cart-dropdown.styles.scss";
const DropDownCart = props => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"> </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};
export default DropDownCart;
