import React from "react";
import { Field } from "redux-form";
import renderInput from "../../../../../../components/renderInput";
import renderDatePicker from "../../../../../../components/renderDatePicker";

const PersonalData = ({ required }) => (
  <div>
    <div className="form-row">
      <Field
        name="name"
        id="name"
        className="form-control"
        component={renderInput}
        type="text"
        label="Nome"
        validate={[required]}
        col="12"
      />
      <Field
        name="last_name"
        id="last_name"
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
        name="fisrt_password"
        id="fisrt_password"
        className="form-control"
        component={renderInput}
        type="password"
        label="Senha"
        validate={[required]}
        col="6"
      />
      <Field
        name="last_password"
        id="last_password"
        className="form-control"
        component={renderInput}
        type="password"
        label="Nova Senha"
        validate={[required]}
        col="6"
      />
      <Field
        name="phone"
        id="phone"
        className="form-control"
        component={renderInput}
        type="number"
        label="Celular"
        validate={[required]}
        col="6"
      />
      <Field
        name="birth_date"
        id="birth_date"
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
