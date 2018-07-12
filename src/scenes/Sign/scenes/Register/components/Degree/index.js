import React from "react";
import { Field } from "redux-form";
import renderTextArea from "../../../../../../components/renderTextArea";

const Degree = () => (
  <div>
    <div className="form-row">
      <Field
        name="academic_education"
        id="academic_education"
        className="form-control textArea"
        component={renderTextArea}
        label="Formação Acadêmica"
        col="12"
      />
    </div>
    <div className="form-row">
      <Field
        name="specialization"
        id="specialization"
        className="form-control textArea"
        component={renderTextArea}
        label="Especialização / Mestrado / Doutorado"
        col="12"
      />
    </div>
    <div className="form-row">
      <Field
        name="extra_courses"
        id="extra_courses"
        className="form-control textArea"
        component={renderTextArea}
        label="Cursos Extras"
        col="12"
      />
    </div>
    <div className="form-row">
      <Field
        name="published_articles"
        id="published_articles"
        className="form-control textArea"
        component={renderTextArea}
        label="Artigos Publicados"
        col="12"
      />
    </div>
  </div>
);

export default Degree;
