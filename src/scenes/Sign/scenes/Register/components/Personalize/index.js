import React from "react";
import { Field } from "redux-form";
import renderInput from "../../../../../../components/renderInput";

const Personalize = ({ required }) => (
  <div>
    <div className="form-row">
      <Field
        name="tituloApresentacao"
        id="tituloApresentacao"
        className="form-control"
        component={renderInput}
        type="text"
        label="Titulo apresentação"
        validate={[required]}
        col="12"
      />
    </div>
    <div className="form-row">
      <Field
        name="avisoVencimento"
        id="avisoVencimento"
        className="form-control"
        component={renderInput}
        type="text"
        label="Aviso de vencimento"
        validate={[required]}
        col="12"
      />
    </div>
    <div className="form-row">
      <Field
        name="paginaContato"
        id="paginaContato"
        className="form-control"
        component={renderInput}
        type="text"
        label="Página de exibição"
        validate={[required]}
        col="12"
      />
    </div>
  </div>
);

export default Personalize;
