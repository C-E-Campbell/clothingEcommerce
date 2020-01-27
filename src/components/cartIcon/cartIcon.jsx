import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import { connect } from "react-redux";
import { changeCartStatus } from "../../redux/cart/cartActions.js";

const CartIcon = props => {
  return (
    <div className="cart-icon" onClick={() => props.changeCartStatus()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = {
  changeCartStatus
};

export default connect(null, mapDispatchToProps)(CartIcon);
