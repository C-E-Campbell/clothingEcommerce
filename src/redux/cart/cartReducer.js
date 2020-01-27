import { TOGGLE_CART_STATUS } from "./cartActions";

const intialState = {
  cartStatus: true
};

const cartReducer = (state = intialState, action) => {
  const { type } = action;
  const { cartStatus } = state;

  switch (type) {
    case TOGGLE_CART_STATUS:
      return {
        ...state,
        cartStatus: !cartStatus
      };

    default:
      return state;
  }
};

export default cartReducer;
