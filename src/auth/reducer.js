
const authenticated = (state = {}, action) => {
    switch (action.type) {
      case "INIT":
        return (state = {});
      default:
        return state;
    }
  };
  
  export default authenticated;
  