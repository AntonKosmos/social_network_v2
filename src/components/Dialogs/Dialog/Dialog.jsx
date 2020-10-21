import React from 'react';
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/12/13/16/17/dancer-1904467_960_720.png"></img>
            </div>
            <div>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
};

export default DialogItem;