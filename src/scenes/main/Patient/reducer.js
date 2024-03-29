const patient = (state = {}, action) => {
  switch (action.type) {
    case "PATIENT_SUCCESS":
      return action.payload;
    case "ERROR":
      return action.payload;
    default:
      return state;
  }
};

export default patient;
