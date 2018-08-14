import React, { Fragment } from "react";
import { Field } from "redux-form";
import renderInput from "../../../../../components/renderInput";

const Personal = ({ required }) => (
  <Fragment>
    <Field
      name="nome"
      id="nome"
      className="form-control"
      component={renderInput}
      type="text"
      label="Nome"
      validate={[required]}
      col="4"
    />
    <Field
      name="sobrenome"
      id="sobrenome"
      className="form-control"
      component={renderInput}
      type="text"
      label="Sobrenome"
      validate={[required]}
      col="4"
    />
    <Field
      name="dataNascimento"
      id="dataNascimento"
      className="form-control"
      component={renderInput}
      type="text"
      label="Nascimento"
      validate={[required]}
      col="2"
    />
    <Field
      name="genero"
      id="genero"
      className="form-control"
      component={renderInput}
      type="text"
      label="Gênero"
      validate={[required]}
      col="2"
    />
  </Fragment>
);

export default Personal;
