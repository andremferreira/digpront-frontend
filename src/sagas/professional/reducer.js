const professional = (state = {}, action) => {
  switch (action.type) {
    case "PROFESSIONAL_SUCCESS":
      return action.payload;
    case "PROFESSIONAL_FAILED":
      return action.payload;
    default:
      return state;
  }
};

export default professional;
