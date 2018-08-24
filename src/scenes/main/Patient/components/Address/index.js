import React, { Fragment } from "react";
import { Field } from "redux-form";
import renderInput from "../../../../../components/renderInput";
import { cep, cepMask } from "../../../../../util";
import renderSelect from "../../../../../components/renderSelect";

const lst = [
  { name: "pai", isn: "322e", cod: "2424" },
  { name: "paieee", isn: "322", cod: "24244" }
];

const Address = ({ required, onChange, disabled }) => (
  <Fragment>
    <Field
      name="cep"
      id="cep"
      className="form-control"
      component={renderInput}
      type="text"
      label="Cep"
      validate={[required]}
      onBlur={onChange}
      col="4"
      {...cepMask}
    />
    <Field
      name="estado"
      id="estado"
      className="form-control"
      component={renderSelect}
      label="Estado"
      validate={[required]}
      data={lst}
      col="2"
    />

    <Field
      name="cidade"
      id="cidade"
      className="form-control"
      component={renderInput}
      type="text"
      label="Cidade"
      validate={[required]}
      col="2"
    />
    <Field
      name="bairro"
      id="bairro"
      className="form-control"
      component={renderInput}
      type="text"
      label="Bairro"
      validate={[required]}
      col="4"
    />
    <Field
      name="endereco"
      id="endereco"
      className="form-control"
      component={renderInput}
      type="text"
      label="Endereço"
      validate={[required]}
      col="8"
    />
    <Field
      name="complemento"
      id="complemento"
      className="form-control"
      component={renderInput}
      type="text"
      label="Complemento"
      validate={[required]}
      col="4"
    />
  </Fragment>
);

export default Address;
