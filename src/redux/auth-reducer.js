import {authMe} from "../api/api";

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
                ...action.data,
                isAuth: true
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

export const setUserDataAC = (id, login, email) => {
    return {
        type: SET_USER_DATA,
        data: {id, login, email}
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
        authMe.me().then(data => {
            if (data.resultCode == 0) {
                let {id, login, email} = data.data;
                dispatch(setUserDataAC(id, login, email));
                dispatch(changeFetching(false));
            }
        });
    };
};

export default authReducer;