const recovery = (state = [], action) => {
  switch (action.type) {
    case "RECOVERY_SUCCESS":
    return action.payload;
    case "RECOVERY_ERROR":
    return action.payload;
    default:
      return state;
  }
};

export default recovery;
