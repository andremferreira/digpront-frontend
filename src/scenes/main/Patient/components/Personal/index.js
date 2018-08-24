import React, { Fragment } from "react";
import { Field } from "redux-form";
import renderInput from "../../../../../components/renderInput";
import {
  strongPassword,
  matchPassword,
  email,
  cep,
  crm,
  phoneMask,
  cepMask
} from "../../../../../util";

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
      name="dt_nascimento"
      id="dt_nascimento"
      className="form-control"
      component={renderInput}
      type="date"
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
