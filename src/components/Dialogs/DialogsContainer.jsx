import React from 'react';
import {newMessageActionCreate, newTextMessageActionCreate} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogPage.messages,
        dialogs: state.dialogPage.dialogs,
        inputTextMessage: state.dialogPage.inputTextMessage
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(newMessageActionCreate())
        },
        newTextMessage: (message) => {
            dispatch(newTextMessageActionCreate(message))
        }
    };
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);