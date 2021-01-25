import React from 'react';
import s from "./../ProfileInfo.module.css"

const Contacts = (props) => {
    return <div>
        <b>Contacts:</b>
        {Object.keys(props.contacts).map((c) => {
            return <div className={s.contactItem} key={c}>
                    <b>{c}</b>: {props.contacts[c]}
                </div>
        })}
    </div>
};

export default Contacts;

