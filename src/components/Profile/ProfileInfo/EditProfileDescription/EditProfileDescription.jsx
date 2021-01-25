import React from 'react';
import FormEditProfile from "./FormEditProfile";

const EditProfileDescription = (props) => {
    return <div>
        <button onClick={() => props.setMode(false)}> Cancel</button>
        <div>
            <FormEditProfile onSubmit={props.onSubmit} initialValues={props.profile} contacts={props.profile.contacts}/>
        </div>
    </div>
};

export default EditProfileDescription;