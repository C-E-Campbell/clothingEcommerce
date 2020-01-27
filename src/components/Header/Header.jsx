import React from "react";
import "./header.styles.scss";
import CartIcon from "../cartIcon/cartIcon";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import DropDownCart from "../DropDownCart/DropDownCart";
import { ReactComponent as Logo } from "../../Assets/crown.svg";

const Header = ({ currentUser, cartStatus }) => {
  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}

        <CartIcon />
      </div>
      {cartStatus ? null : <DropDownCart />}
    </header>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  cartStatus: state.cart.cartStatus
});

export default connect(mapStateToProps)(Header);
