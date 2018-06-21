import React from "react";
import { Field } from "redux-form";
import renderField from "../../../../../../components/RenderField";

const Degree = ({ required }) => (
  <div>
    <div className="form-row">
      <Field
        name="academic_education"
        id="academic_education"
        className="form-control"
        component={renderField}
        type="text"
        label="Formação Acadêmica"
        validate={[required]}
        col="12"
      />
    </div>
    <div className="form-row">
      <Field
        name="specialization"
        id="specialization"
        className="form-control"
        component={renderField}
        type="text"
        label="Especialização / Mestrado / Doutorado"
        validate={[required]}
        col="12"
      />
    </div>
    <div className="form-row">
      <Field
        name="extra_courses"
        id="extra_courses"
        className="form-control"
        component={renderField}
        type="text"
        label="Cursos Extras"
        validate={[required]}
        col="12"
      />
    </div>
    <div className="form-row">
      <Field
        name="published_articles"
        id="published_articles"
        className="form-control"
        component={renderField}
        type="text"
        label="Artigos Publicados"
        validate={[required]}
        col="12"
      />
    </div>
  </div>
);

export default Degree;
