import React from "react";
import { Field } from "redux-form";
import renderField from "../../../../../../components/RenderField";

const PersonalData = ({ required }) => (
  <div>
    <div className="form-row">
      <Field
        name="name"
        id="name"
        className="form-control"
        component={renderField}
        type="text"
        label="Nome"
        validate={[required]}
        col="6"
      />
      <Field
        name="last_name"
        id="last_name"
        className="form-control"
        component={renderField}
        type="text"
        label="Sobrenome"
        validate={[required]}
        col="6"
      />
    </div>
    <div className="form-row">
      <Field
        name="email"
        id="email"
        className="form-control"
        component={renderField}
        type="text"
        label="Email"
        validate={[required]}
        col="6"
      />
      <Field
        name="phone"
        id="phone"
        className="form-control"
        component={renderField}
        type="text"
        label="Celular"
        validate={[required]}
        col="6"
      />
    </div>
    <div className="form-row">
      <Field
        name="fisrt_password"
        id="fisrt_password"
        className="form-control"
        component={renderField}
        type="text"
        label="Senha"
        validate={[required]}
        col="6"
      />
      <Field
        name="last_password"
        id="last_password"
        className="form-control mb-3"
        component={renderField}
        type="text"
        label="Nova Senha"
        validate={[required]}
        col="6"
      />
    </div>
    <div className="form-row">
      <Field
        name="birth_date"
        id="birth_date"
        className="form-control"
        component={renderField}
        type="text"
        label="Data Nascimento"
        validate={[required]}
        col="6"
      />
      <Field
        name="cep"
        id="cep"
        className="form-control"
        component={renderField}
        type="text"
        label="Cep"
        validate={[required]}
        col="6"
      />
    </div>
  </div>
);

export default PersonalData;
