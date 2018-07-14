import React from "react";
import { Field } from "redux-form";
import renderInput from "../../../../../../components/renderInput";
import renderDatePicker from "../../../../../../components/renderDatePicker";

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
        validate={[required]}
        col="12"
      />
      <Field
        id="fisrt_password"
        className="form-control"
        component={renderInput}
        type="password"
        label="Senha"
        validate={[required]}
        col="6"
      />
      <Field
        name="password"
        id="password"
        className="form-control"
        component={renderInput}
        type="password"
        label="Nova Senha"
        validate={[required]}
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
      />
      <Field
        name="dataNascimento"
        id="dataNascimento"
        className="form-control"
        component={renderDatePicker}
        label="Data Nascimento"
        validate={[required]}
        col="6"
       
      />
      <Field
        name="cep"
        id="cep"
        className="form-control"
        component={renderInput}
        type="text"
        label="Cep"
        validate={[required]}
        col="12"
      />
    </div>
  </div>
);

export default PersonalData;
