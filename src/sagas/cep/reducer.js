const cep = (state = {}, action) => {
  switch (action.type) {
    case "CEP_SUCCESS":
      return {
        cidade: action.payload.dscMunicipio,
        bairro: action.payload.dscBairro,
        estado: action.payload.slgUf,
      };
    case "CEP_FAILED":
      return action.payload;
    case "CEP_NOT_FIND":
      return action.payload;
    default:
      return state;
  }
};

export default cep;
