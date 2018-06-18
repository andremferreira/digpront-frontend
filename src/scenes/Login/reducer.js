
const reducerLogin = (state = [], action) => {
  switch (action.type) {
    case "LOAD_SUCCESS":
    return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default reducerLogin;