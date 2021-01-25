import React from 'react';
import Contacts from "./Contacts";

const ProfileDescription = (props) => {
    return <div>
        <div>
            <b>About me</b>: {props.profile.aboutMe}
        </div>
        <div>
            <b>fullName</b>: {props.profile.fullName}
        </div>
        <div>
            <b>looking for a job </b>: {props.profile.lookingForAJob ? "yes" : "no"}
        </div>
        {
            props.profile.lookingForAJob
                ? <div>
                    <b>Description </b>: {props.profile.lookingForAJobDescription}
                </div>
                : null
        }
        <Contacts contacts={props.profile.contacts}/>
    </div>
};

export default ProfileDescription;

