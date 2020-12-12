import React from "react";
import s from "./Navbar.module.css"
import BestFriends from './BestFriends/BestFr'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {

    /*let friendsElements = props.state.bestFriendsItem.friends.map((f) => <BestFriends state={f}/>);*/

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ="/users" activeClassName={s.activeLink}> Users </NavLink>
            </div>
            <h3>
                Best Friends
            </h3>
            <div className={s.bestFriends}>
                {/*{friendsElements}*/}
            </div>
        </nav>
    );
};

export default Navbar;
