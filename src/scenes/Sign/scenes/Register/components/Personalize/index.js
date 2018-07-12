import React from "react";
import { Field } from "redux-form";
import renderInput from "../../../../../../components/renderInput";

const Personalize = ({ required }) => (
  <div>
    <div className="form-row">
      <Field
        name="title_apresentation"
        id="title_apresentation"
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
        name="maturity"
        id="maturity"
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
        name="watch_pages"
        id="watch_pages"
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
