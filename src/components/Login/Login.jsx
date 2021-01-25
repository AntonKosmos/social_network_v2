import React from "react";
import { Field, reduxForm } from 'redux-form'
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import ProfileContainer from "../Profile/ProfileContainer";
import {generateMaxLength, required} from "../../validators/validators";
import {Input} from "../../common/formControl/formControl";
import s from "../../common/formControl/formControl.module.css"

let maxLength = generateMaxLength(30);

let Login = (props) => {
    let onSubmitLogin = (data) => {
        props.login(data);
    };

    if(props.isAuth) return <ProfileContainer/>

    return <div>
        <h2>Login</h2>
        <LoginForm onSubmit={onSubmitLogin} captcha = {props.captcha}/>
    </div>
};

let LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"email"} component={Input} name={"email"} type={"email"} validate={[required, maxLength]}/>
        </div>
        <div>
            <Field placeholder={"password"} component={"input"} name={"password"} type={"password"}/>
        </div>
        <div>
            <label>Remember me</label>
            <Field name={"rememberMe"} component={"input"} type={"checkbox"}/>
        </div>
        {props.error && (<div className={s.someError}>
            {props.error}
        </div>) }
        {props.captcha
            ? <div>
                <img src={props.captcha}/>
                <div>
                    <label>Input text form image</label> <br/>
                    <Field name={"captcha"} component={"input"} type={"text"}/>
                </div>
            </div>
            :
            null}
        <div>
            <button> login</button>
        </div>
    </form>
};

LoginForm = reduxForm({form:"login"})(LoginForm);

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    };
};

export default connect(mapStateToProps, {login})(Login);