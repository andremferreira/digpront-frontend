import React from "react";
import { Field } from "redux-form";
import renderInput from "../../../../../../components/renderInput";
import {
  strongPassword,
  matchPassword,
  email,
  cep,
  crm,
  phoneMask,
  cepMask
} from "../../../../../../util";

const PersonalData = ({ required }) => (
  <div>
    <div className="form-row">
      <Field
        name="nome"
        id="nome"
        className="form-control"
        component={renderInput}
        type="text"
        label="Nome"
        validate={[required]}
        col="12"
      />
      <Field
        name="sobrenome"
        id="sobrenome"
        className="form-control"
        component={renderInput}
        type="text"
        label="Sobrenome"
        validate={[required]}
        col="12"
      />
      <Field
        name="email"
        id="email"
        className="form-control"
        component={renderInput}
        type="email"
        label="Email"
        validate={[required, email]}
        col="6"
      />
      <Field
        name="crm"
        id="crm"
        className="form-control"
        component={renderInput}
        type="text"
        label="Crm"
        validate={[required, crm]}
        col="6"
      />
      <Field
        id="password"
        name="password"
        className="form-control"
        component={renderInput}
        type="password"
        label="Senha"
        validate={[required]}
        col="6"
      />
      <Field
        name="confPassword"
        id="confPassword"
        className="form-control"
        component={renderInput}
        type="password"
        label="Nova Senha"
        validate={[required, strongPassword, matchPassword]}
        col="6"
      />
      <Field
        name="celular"
        id="celular"
        className="form-control"
        component={renderInput}
        type="text"
        label="Celular"
        validate={[required]}
        col="6"
        {...phoneMask}
      />
      <Field
        name="dataNascimento"
        id="dataNascimento"
        className="form-control"
        component={renderInput}
        label="Data Nascimento"
        validate={[required]}
        col="6"
        type="date"
      />
      <Field
        name="cep"
        id="cep"
        className="form-control"
        component={renderInput}
        type="text"
        label="Cep"
        validate={[required, cep]}
        col="12"
        {...cepMask}
      />
    </div>
  </div>
);

export default PersonalData;
