import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../../common/formControl/formControl";
import s from "./EditProfile.module.css"

let FormEditProfile = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={props.error ? s.error : null}>
            {props.error}
        </div>
        <div>
            <b>About me</b>
            <Field type={"text"} name={"aboutMe"} placeholder={"about me"} component={Input}/>
        </div>
        <div>
            <b>fullName</b>
            <Field type={"text"} name={"fullName"} placeholder={"full name"} component={Input}/>
        </div>
        <div>
            <b>looking for a job </b>
            <Field type={"checkbox"} name={"lookingForAJob"} component={Input}/>
        </div>
        <div>
            <b>looking for a job description </b>
            <Field type={"text"} name={"lookingForAJobDescription"} component={Input} placeholder={"description"}/>
        </div>
        {
            Object.keys(props.contacts).map(name => {
                return <div key={name}>
                    <b>{name}</b>
                    <Field type={"text"} name={`contacts[${name}]`} placeholder={`${name}`} component={Input}/>
                </div>
            })
        }
        <button>Save</button>
    </form>
}

FormEditProfile = reduxForm({form: "editProfile"})(FormEditProfile);

export default FormEditProfile;