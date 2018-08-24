const patient = (state = {}, action) => {
  switch (action.type) {
    case "INIT":
      return (state = {});
    case "CEP_SUCCESS":
      return {
        cidade: action.data[0].dscMunicipio,
        bairro: action.data[0].dscBairro
      };
    case "CEP_ERROR":
      return action.payload;
    case "PATIENT_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};

export default patient;
