const recovery = (state = {}, action) => {
  switch (action.type) {
    case "INIT":
      return (state = {});
    case "RECOVERY_SUCCESS":
      return action.payload;
    case "RECOVERY_ERROR":
      return action.payload;
    default:
      return state;
  }
};

export default recovery;
