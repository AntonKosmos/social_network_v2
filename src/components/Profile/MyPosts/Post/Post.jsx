import React from 'react';
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://html5css.ru/w3css/img_avatar3.png"></img>
            {props.message}
            <div>
                <span> Like {props.countLike}</span>
            </div>
        </div>
    );
};

export default Post;