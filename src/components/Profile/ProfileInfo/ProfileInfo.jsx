import React, {useState} from 'react';
import s from "./ProfileInfo.module.css"
import Preloader from "../../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfilePhoto from "./ProfilePhoto";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import EditProfileDescription from "./EditProfileDescription/EditProfileDescription";

const ProfileInfo = (props) => {
    let [editMode, setMode] = useState(false);
    let onSubmitForm = (data) => {
        props.updateProfileInfo(data);
        if(props.statusLoadData) {
            setMode(false)
        }
    };
    if (!props.profile)
        return <Preloader/>

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <span>{props.profile.fullName}</span>
                </div>
                <ProfilePhoto profile={props.profile} savePhoto={props.savePhoto}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {(props.isOwner && !editMode)  && <button onClick={() => setMode(true) }> Edit </button>}
                {editMode
                    ? <EditProfileDescription setMode = {setMode} onSubmit={onSubmitForm} profile = {props.profile}/>
                    : <ProfileDescription profile={props.profile}/>
                }
            </div>
        </div>
    );
};

export default ProfileInfo;

