import React, {createRef} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {newPostText} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let newPostText = () => {
        props.newPostText(newPostElement.current.value);
    };

    let addPost = () => {
        props.addPost();
    };

    let PostElements = props.posts.map((post) => {
        return (<Post key ={post.id} message={post.message} countLike={post.countLike}/>);
    });
    return (
        <div className={s.postBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea onChange={newPostText} ref={newPostElement} value={props.updateNewPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}> Add post</button>
                </div>

            </div>
            <div>
                {PostElements}
            </div>
        </div>
    );
};

export default MyPosts;