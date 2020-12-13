import {authMe} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';
const CHANGE_FEATCHING_TYPE = "CHANGE_FEACHING";

let initialStore = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        case CHANGE_FEATCHING_TYPE: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        default:
            return state;
    }
};

export const setUserDataAC = (id, login, email, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {id, login, email, isAuth}
    };
};

export const changeFetching = (isFetching) => {
    return {
        type: CHANGE_FEATCHING_TYPE,
        isFetching: isFetching
    };
};

//------------- THUNKS -------------

export const getUserData = () => {
    return (dispatch) => {
        dispatch(changeFetching(true));
       return  authMe.me().then(data => {
            if (data.resultCode == 0) {
                let {id, login, email} = data.data;
                dispatch(setUserDataAC(id, login, email, true));
                dispatch(changeFetching(false));
            }
        });
    };
};

export const login = ({email, password, rememberMe}) => (dispatch) => {
    authMe.login({email, password, rememberMe}).then(data => {
        if(!data.resultCode) {
            dispatch(getUserData());
        }
        else dispatch(stopSubmit("login", {_error: data.messages.length ? data.messages[0] : "Some error" }));
    })
}

export const logout = () => (dispatch) => {
    authMe.logout().then(data => {
        if(!data.resultCode) {
            dispatch(setUserDataAC(null, null, null, false));
        }
    })
}

export default authReducer;