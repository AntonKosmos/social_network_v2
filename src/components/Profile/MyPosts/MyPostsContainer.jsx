import React from 'react';
import {addPost, newPostText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        updateNewPostText: state.profilePage.updateNewPostText
    };
};

export default compose(
    connect(mapStateToProps, {addPost, newPostText})
)(MyPosts);
