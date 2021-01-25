import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         isOwner = {!props.match.params.userId}
                         savePhoto={props.savePhoto}
                         updateStatus = {props.updateStatus}
                         updateProfileInfo = {props.updateProfileInfo}
                         statusLoadData = {props.statusLoadData}
            />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
