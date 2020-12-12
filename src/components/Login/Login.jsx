import React from "react";
import { Field, reduxForm } from 'redux-form'

let Login = (props) => {
    let onSubmit = (data) => {
        console.log(data);
    };
    return <div>
        <h2>Login</h2>
        <LoginForm onSubmit = {onSubmit}/>
    </div>
};

let LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"email"} component={"input"} name={"email"} type={"email"}/>
        </div>
        <div>
            <Field placeholder={"password"} component={"input"} name={"password"} type={"password"}/>
        </div>
        <div>
            <label>Remember me</label>
            <Field name={"rememberMe"} component={"input"} type={"checkbox"}/>
        </div>
        <div>
            <button> login</button>
        </div>
    </form>
};

LoginForm = reduxForm({form:"login"})(LoginForm);

export default Login;