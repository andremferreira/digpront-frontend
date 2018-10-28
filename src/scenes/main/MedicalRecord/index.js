import React from "react";
import { reduxForm, Field } from "redux-form";
import renderTextArea from "../../../components/renderTextArea";

class MedicalRecord extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Field
          name="queixa"
          id="queixa"
          className="form-control"
          component={renderTextArea}
          type="text"
          label="Queixa"
          col="12"
        />

        <Field
          name="antecedente"
          id="antecedente"
          className="form-control"
          component={renderTextArea}
          type="text"
          label="Antecedente"
          col="12"
        />
        <Field
          name="alergia"
          id="alergia"
          className="form-control"
          component={renderTextArea}
          type="text"
          label="Alergia"
          col="12"
        />

        <Field
          name="historicoFamiliar"
          id="historicoFamiliar"
          className="form-control"
          component={renderTextArea}
          type="text"
          label="Histórico Familiar"
          col="12"
        />

        <Field
          name="exameFisico"
          id="exameFisico"
          className="form-control"
          component={renderTextArea}
          type="text"
          label="Exame Físico"
          col="12"
        />

        <Field
          name="exameComplementar"
          id="exameComplementar"
          className="form-control"
          component={renderTextArea}
          type="text"
          label="Exame Complementar"
          col="12"
        />

        <Field
          name="conduta"
          id="conduta"
          className="form-control"
          component={renderTextArea}
          type="text"
          label="Conduta"
          col="12"
        />

        <Field
          name="receita"
          id="receita"
          className="form-control"
          component={renderTextArea}
          type="text"
          label="Receita"
          col="6"
        />
      </React.Fragment>
    );
  }
}

MedicalRecord = reduxForm({
  form: "medicalForm",
  initialValues: {},
  enableReinitialize: false
})(MedicalRecord);

export default MedicalRecord;
