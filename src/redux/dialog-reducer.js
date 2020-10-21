const NEW_TEXT_MESSAGE_TYPE = 'NEW-TXT-MESSAGE';
const NEW_MESSAGE_TYPE = 'NEW-MESSAGE';

let initialStore = {
    dialogs: [
        {id: "1", name: "Max"},
        {id: "2", name: "Artyom"},
        {id: "3", name: "Vika"},
        {id: "4", name: "Vlad"}
    ],
    messages: [
        {id: "1", message: "Hi"},
        {id: "1", message: "I go home"},
        {id: "1", message: "How are you?"},
        {id: "1", message: "Yoo"}
    ],
    inputTextMessage: ""
};

const dialogReducer = (state = initialStore, action) => {
    switch (action.type) {
        case NEW_TEXT_MESSAGE_TYPE : {
            return {
                ...state,
                inputTextMessage: action.message
            };
        }
        case NEW_MESSAGE_TYPE : {
            let newMessage = state.inputTextMessage
            return {
                ...state,
                inputTextMessage: "",
                messages: [...state.messages, { id: "5", message: newMessage}]
            };
        }
        default:
            return state;
    }
};

export const newTextMessageActionCreate = (newTextMessage) => {
    return {
        type: NEW_TEXT_MESSAGE_TYPE,
        message: newTextMessage
    };
};

export const newMessageActionCreate = (message) => {
    return {
        type: NEW_MESSAGE_TYPE,
        message: message
    };
};

export default dialogReducer;