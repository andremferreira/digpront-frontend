import React from "react";
import Button from "../../components/button";

import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import CardHeader from "../../components/CardHeader";
import PersonalData from "../Register/components/PersonalData";
import Degree from "../Register/components/Degree";
import Personalize from "../Register/components/Personalize";

let Register = props => {
    const { handleSubmit, submitValues, submitting } = props;
    return (
        <div className="layout-center">
            <form onSubmit={handleSubmit(submitValues)} className="form-register">
                <CardHeader title="Dados Pessoais">
                    <PersonalData />
                    <Degree />
                    <Personalize />
                    <Button name="Cadastrar" submitting={submitting} />
                </CardHeader>
            </form>
        </div>
    );
};

Register = reduxForm({ form: "registerForm", initialValues: {} })(Register);

const mapDispatchToProps = dispatch => {
    return {
        submitValues: values => dispatch({ type: "SUBMIT_REGISTER", payload: values })
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Register);
