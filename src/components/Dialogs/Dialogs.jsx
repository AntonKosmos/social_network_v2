import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let sendMessage = () => {
        props.sendMessage();
    };

    let newTextMessage = (event) => {
        props.newTextMessage(event.target.value);
    }

    let dialogElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name}/>);
    let messageElements = props.messages.map(m => <Message key={m.id} message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <div>
                        <textarea onChange={newTextMessage} value={props.inputTextMessage}
                                  placeholder={"Enter message"}> </textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;