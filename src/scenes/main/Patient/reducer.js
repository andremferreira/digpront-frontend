const patient = (state = {}, action) => {
    switch (action.type) {
      case "INIT":
        return (state = {});
      case "CEP_SUCCESS":
        return action.payload;
      case "CEP_ERROR":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default patient;
  