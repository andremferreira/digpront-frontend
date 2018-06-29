const login = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return action.payload;
    case "LOGIN_ERROR":
    return action.payload;
    default:
      return state;
  }
};

export default login;
