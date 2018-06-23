export default reducerLogin = (state = [], action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log(action.payload);
    case "LOGIN_ERROR":
      console.log('error',action.payload.errors);
    default:
      return state;
  }
};

