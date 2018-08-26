const uf = (state = {}, action) => {
  switch (action.type) {
    case "UF_SUCCESS":
      return action.payload;
    case "UF_FAILED":
      return action.payload;
    default:
      return state;
  }
};

export default uf;
