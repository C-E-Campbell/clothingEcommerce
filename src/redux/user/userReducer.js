const intialState = {
  currentUser: null
};

const userReducer = (state = intialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload
      };

    default:
      return state;
  }
};

export default userReducer;
