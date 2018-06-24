const recovery = (state = [], action) => {
  switch (action.type) {
    case "RECOVERY_SUCCESS":
      console.log(action.payload);
    case "RECOVERY_ERROR":
      console.log("error", action.payload.errors);
    default:
      return state;
  }
};

export default recovery;
