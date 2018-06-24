const login = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return action.payload;
    case "LOGIN_ERROR":
      console.log("error", action.payload.errors);
      return state;

    default:
      return state;
  }
};

export default login;
