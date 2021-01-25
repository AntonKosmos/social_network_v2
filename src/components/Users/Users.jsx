import React from 'react';
import style from './Users.module.css'
import userPhoto from '../../asset/person-sample.png'
import {NavLink} from "react-router-dom";
import {Paginator} from "../../common/Paginator/Paginator";

let Users = (props) => {
    return <div>
        <Paginator onPageSelect={props.onPageSelect}
                   currentPage = {props.currentPage }
                   totalItemsCount = {props.totalUsersCount}
                   pageSize = {props.pageSize}
                   portionSize = {props.portionSize}
        />
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