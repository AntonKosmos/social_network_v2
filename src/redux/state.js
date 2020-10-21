import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: "Hello!", countLike: "11"},
                {id: 1, message: "Hello 2!", countLike: "14"},
                {id: 2, message: "Hello 3!", countLike: "12"},
            ],
            updateNewPostText: "Hello"
        },
        dialogPage: {
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
            newTextMessage: ""
        },
        sidebar: {
            bestFriendsItem: {
                friends: [
                    {id: "1", name: "Anton"},
                    {id: "2", name: "Vika"},
                    {id: "3", name: "Dasha"},
                ]
            }
        }

    },
    _subscribe(observer) {
        console.log("empty");
    },

    getState() {
        return this._state;
    },
    subscribe(callback) {
        this._subscribe = callback;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);

        this._subscribe(this._state);
    }
};

