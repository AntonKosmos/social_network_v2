import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

let reduces = combineReducers(
    {
        profilePage : profileReducer,
        dialogPage : dialogReducer,
        sidebar : sidebarReducer,
        usersPage : usersReducer,
        auth : authReducer
    }
);

export let store = createStore(reduces, applyMiddleware(thunkMiddleware));
