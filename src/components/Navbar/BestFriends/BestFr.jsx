import React from "react";
import s from "./bestFriends.module.css"
import {NavLink} from 'react-router-dom'

const BestFriends = (props) => {
    return (
        <div className={s.friends}>
            <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4bkPT14o4_n_lnU-3DNyZol1LE0vParolHN-kXQTD8exgO4-8&usqp=CAU"></img>
            <div> {props.state.name}</div>
        </div>
    );
};

export default BestFriends;
