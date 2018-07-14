import React from "react";
import { Field } from "redux-form";
import renderTextArea from "../../../../../../components/renderTextArea";

const Degree = () => (
  <div>
    <div className="form-row">
      <Field
        name="formacaoAcademica"
        id="formacaoAcademica"
        className="form-control textArea"
        component={renderTextArea}
        label="Formação Acadêmica"
        col="12"
      />
    </div>
    <div className="form-row">
      <Field
        name="posGraduacao"
        id="posGraduacao"
        className="form-control textArea"
        component={renderTextArea}
        label="Especialização / Mestrado / Doutorado"
        col="12"
      />
    </div>
    <div className="form-row">
      <Field
        name="cursoAprimoramento"
        id="cursoAprimoramento"
        className="form-control textArea"
        component={renderTextArea}
        label="Curso Aprimoramento"
        col="12"
      />
    </div>
    <div className="form-row">
      <Field
        name="artigo"
        id="artigo"
        className="form-control textArea"
        component={renderTextArea}
        label="Artigos Publicados"
        col="12"
      />
    </div>
  </div>
);

export default Degree;
