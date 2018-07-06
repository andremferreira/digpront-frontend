import React from "react";
import { Field } from "redux-form";
import renderField from "../../../../../../components/RenderField";

const Personalize = ({ required }) => (
  <div>
    

    <div className="form-row">
      <Field
        name="title_apresentation"
        id="title_apresentation"
        className="form-control"
        component={renderField}
        type="text"
        label="Titulo apresentação"
        validate={[required]}
        col="6"
      />

      <Field
        name="maturity"
        id="maturity"
        className="form-control"
        component={renderField}
        type="text"
        label="Aviso de vencimento"
        validate={[required]}
        col="6"
      />
    </div>
    <div className="form-row">
      <Field
        name="watch_pages"
        id="watch_pages"
        className="form-control"
        component={renderField}
        type="text"
        label="Página de exibição"
        validate={[required]}
        col="12"
      />
    </div>
  </div>
);

export default Personalize;
