import React, { Fragment } from "react";
import { Field } from "redux-form";
import renderInput from "../../../../../components/renderInput";

const Contact = ({ required }) => (
  <Fragment>
    <Field
      name="email"
      id="email"
      className="form-control"
      component={renderInput}
      type="text"
      label="Email"
      validate={[required]}
      col="4"
    />
    <Field
      name="profissao"
      id="profissao"
      className="form-control"
      component={renderInput}
      type="text"
      label="Profissão"
      validate={[required]}
      col="4"
    />
    <Field
      name="telefone"
      id="telefone"
      className="form-control"
      component={renderInput}
      type="text"
      label="Telefone"
      validate={[required]}
      col="2"
    />
    <Field
      name="indicacao"
      id="indicacao"
      className="form-control"
      component={renderInput}
      type="text"
      label="Indicado por ..."
      validate={[required]}
      col="2"
    />
  </Fragment>
);

export default Contact;
