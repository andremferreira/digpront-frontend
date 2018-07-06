const register = (state = {}, action) => {
    switch (action.type) {
      case "INIT":
        return (state = {});
      case "REGISTER_SUCCESS":
        return action.payload;
      case "REGISTER_ERROR":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default register;
  