import React from 'react';
import userPhoto from "../../../asset/person-sample.png";

const ProfilePhoto = (props) => {
    const savePhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    return <div>
        <img src={props.profile.photos.small || userPhoto}/>
        <input type={"file"} onChange={savePhoto}/>
    </div>
};

export default ProfilePhoto;

