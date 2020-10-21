import {userAPI} from "../api/api";

const ADD_POST_TYPE = 'ADD_POST';
const NEW_POST_TEXT_TYPE = 'NEW-POST-TEXT';
const OPEN_USER_PROFILE = 'OPEN_USER_PROFILE';

let initialState = {
    posts: [
        {id: 0, message: "Hello!", countLike: "11"},
        {id: 1, message: "Hello 2!", countLike: "14"},
        {id: 2, message: "Hello 3!", countLike: "12"},
    ],
    updateNewPostText: "Hello",
    profile: null,
    status: 'Hello my ffiends!'
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

//------------- THUNKS -------------

export const openUserProfile = (userId) => {
    return (dispatch) => {
        if (!userId)
            userId = 2;
        userAPI.getUserProfile(userId).then(data => {
            dispatch(openUserProfileAC(data));
        });
    };
};

export default profileReducer;