import React from 'react';
import s from "./ProfileInfo.module.css"
import Preloader from "../../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile)
        return <Preloader/>

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <span>{props.profile.fullName}</span>
                </div>
                <img src={props.profile.photos.small}/>
                <ProfileStatus status = {props.status}/>
                <div>
                    <span>{props.profile.aboutMe}</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;

