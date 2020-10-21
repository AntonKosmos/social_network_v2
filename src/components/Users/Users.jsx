import React from 'react';
import style from './Users.module.css'
import userPhoto from '../../asset/person-sample.png'
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pages = [];
    let totalPagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    for (let i = 1; i <= props.maxPage; i++) {
        pages.push(i);
    }

    return <div>
        {
            pages.map((p) => {
                return <button className={props.currentPage === p ? style.selectPage : null}
                               key={p}
                               onClick={() => props.onPageSelect(p)}> {p}</button>
            })
        }
        {
            props.users.map(u =>
                <div key={u.id}>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small ? u.photos.small : userPhoto}></img>
                        </NavLink>
                    </div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    {
                        u.followed ?
                            <button disabled={props.followingProgress.some(id => id === u.id)}
                                    onClick={() => props.unfollow(u.id)}>
                                Followed
                            </button> :
                            <button disabled={props.followingProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.follow(u.id)
                                    }}>
                                Unfollowed
                            </button>
                    }
                </div>
            )
        }
    </div>
};
export default Users;