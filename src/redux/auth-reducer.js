import {authMe, getCaptchaURL} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';
const CHANGE_FEATCHING_TYPE = "CHANGE_FEACHING";
const SET_CAPTCHA  = "SET_CAPTCHA"

let initialStore = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
    captcha: null
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
        case SET_CAPTCHA: {
            return {
                ...state,
                captcha: action.captcha
            }
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

export const setCaptcha = (captcha) => {
    return { type: SET_CAPTCHA, captcha }
}

//------------- THUNKS -------------

export const getUserData = () => async (dispatch) => {
    dispatch(changeFetching(true));
    let data = await authMe.me();
    if (data.resultCode == 0) {
        let {id, login, email} = data.data;
        dispatch(setUserDataAC(id, login, email, true));
        dispatch(changeFetching(false));
    }
    return data;
};

export const login = ({email, password, rememberMe, captcha}) => async (dispatch) => {
    let data = await authMe.login({email, password, rememberMe, captcha})
    if (data.resultCode === 0) {
        dispatch(getUserData());
    }
    else {
        if(data.resultCode === 10) {
            dispatch(getCaptcha());
        }
        dispatch(stopSubmit("login", {_error: data.messages.length ? data.messages[0] : "Some error"}));
    }};

export const getCaptcha = () => async (dispatch) => {
    const data = await getCaptchaURL.getCaptcha();
    const captchaURL = data.url;
    dispatch(setCaptcha(captchaURL));
};

export const logout = () => async (dispatch) => {
    let data = await authMe.logout()
    if (!data.resultCode) {
        dispatch(setUserDataAC(null, null, null, false));
    }
};

export default authReducer;