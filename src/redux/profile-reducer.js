import {ProfileAPI, userAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST_TYPE = 'ADD_POST';
const NEW_POST_TEXT_TYPE = 'NEW-POST-TEXT';
const OPEN_USER_PROFILE = 'OPEN_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const SET_STATUS_LOADING = "SET_STATUS_LOADING";

let initialState = {
    posts: [
        {id: 0, message: "Hello!", countLike: "11"},
        {id: 1, message: "Hello 2!", countLike: "14"},
        {id: 2, message: "Hello 3!", countLike: "12"},
    ],
    updateNewPostText: "Hello",
    profile: null,
    status: 'Hello my ffiends!',
    statusLoadData: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_TYPE : {
            let newText = state.updateNewPostText
            return {
                ...state,
                updateNewPostText: "",
                posts: [...state.posts, {id: 5, message: newText, countLike: "0"}]
            };
        }
        case NEW_POST_TEXT_TYPE : {
            return {
                ...state,
                updateNewPostText: action.newPostText
            };
        }
        case OPEN_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case GET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    ...action.photos
                }
            }
        }
        case SET_STATUS_LOADING: {
            return {
                ...state,
                statusLoadData: action.status
            }
        }
        default:
            return state;

    }
};

//------------- ACTIONS -------------

export const addPost = () => {
    return {type: ADD_POST_TYPE};
};

export const newPostText = (newPosttext) => {
    return {
        type: NEW_POST_TEXT_TYPE,
        newPostText: newPosttext
    };
};

export const openUserProfileAC = (profile) => {
    return {
        type: OPEN_USER_PROFILE,
        profile: profile
    };
};

export const getStatus = (status) => {
    return {
        type: GET_STATUS,
        status: status
    };
}

const savePhotoSuccess = (photos) => {
    return { type: SAVE_PHOTO_SUCCESS, photos }
};

const setStatusLoading = (status) => {
    return { type: SET_STATUS_LOADING, status }
};

//------------- THUNKS -------------

export const openUserProfile = (userId) => {
    return async (dispatch) => {
        let data = await userAPI.getUserProfile(userId);
        dispatch(openUserProfileAC(data));
    };
};

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let data = await ProfileAPI.getUserStatus(userId);
        dispatch(getStatus(data));
    };
};

export const updateStatus = (status) => {
    return async (dispatch) => {
        let data = await ProfileAPI.updateUserStatus(status);
        if (data.resultCode == 0) {
            dispatch(getStatus(status));
        }
    };
};

export const savePhoto = (photo) => {
    return async (dispatch) => {
        let data = await ProfileAPI.saveProfilePhoto(photo);
        if (data.resultCode == 0) {
            dispatch(savePhotoSuccess(data.data));
        }
    };
};

export const updateProfileInfo = (profileInfo) => {
    return async (dispatch, getState) => {
        const id = getState().auth.id;
        let data = await ProfileAPI.updateUserProfile(profileInfo);
        if (data.resultCode == 0) {
            dispatch(setStatusLoading(true));
            dispatch(openUserProfile(id));
        }
        else {
            dispatch(setStatusLoading(false));
            dispatch(stopSubmit("editProfile", {_error: data.messages.length ? data.messages[0] : "Some error"}));
        }
    };
};

export default profileReducer;