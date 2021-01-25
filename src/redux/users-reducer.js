import {userAPI} from "../api/api";

const FOLLOW_TYPE = 'FOLLOW';
const NOT_FOLLOW_TYPE = 'NOT-FOLLOW'
const SET_USERS_TYPE = 'SET-USERS'
const SET_TOTAL_USERS_TYPE = 'SET-TOTAL-USERS'
const SELECT_PAGE_TYPE = 'SELECT_PAGE'
const CHANGE_FEATCHING_TYPE = 'CHANGE_FEACHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialStore = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    portionSize: 5,
    isFetching: false,
    followingProgress: []

};

const usersReducer = (state = initialStore, action) => {
    switch (action.type) {
        case FOLLOW_TYPE:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id)
                        return {
                            ...u,
                            followed: true
                        }
                    return u;

                })
            };
        case NOT_FOLLOW_TYPE:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id == action.id)
                        return {
                            ...u,
                            followed: false
                        }
                    return u;

                })
            };
        case SET_USERS_TYPE:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_TOTAL_USERS_TYPE:
            return {
                ...state,
                totalUsersCount: action.totalUsers
            }
        case SELECT_PAGE_TYPE: {
            return {
                ...state,
                currentPage: action.pageNumber
            }
        }
        case CHANGE_FEATCHING_TYPE:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.isFetching ?
                    [...state.followingProgress, action.userId] :
                    [...state.followingProgress.filter(id => id != action.userId)]
            }
        default:
            return state;
    }
};

//------------- ACTIONS -------------

export const followAC = (userId) => {
    return {
        type: FOLLOW_TYPE,
        id: userId
    };
};

export const unfollowAC = (userId) => {
    return {
        type: NOT_FOLLOW_TYPE,
        id: userId
    };
};

export const setUsers = (users) => {
    return {
        type: SET_USERS_TYPE,
        users: users
    };
}

export const setTotalUsers = (totalUsers) => {
    return {
        type: SET_TOTAL_USERS_TYPE,
        totalUsers: totalUsers
    };
}

export const selectPage = (pageNumber) => {
    return {
        type: SELECT_PAGE_TYPE,
        pageNumber: pageNumber
    };
}

export const changeFetching = (isFetching) => {
    return {
        type: CHANGE_FEATCHING_TYPE,
        isFetching: isFetching
    };
}

export const changeToggleFollowing = (id, isFetching) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        userId: id,
        isFetching: isFetching
    };
}

//------------- THUNKS -------------

export const getUsers = (pageSize, currentPage) => {
    return async dispatch => {
        dispatch(selectPage(currentPage));
        dispatch(changeFetching(true));
        let data = await userAPI.getUsers(pageSize, currentPage);
        userAPI.getUsers(pageSize, currentPage)
        dispatch(setUsers(data.items));
        dispatch(setTotalUsers(data.totalCount));
        dispatch(changeFetching(false));
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(changeToggleFollowing(userId, true));
        let data = userAPI.unfollow(userId);
        if (data.resultCode == 0)
            dispatch(unfollowAC(userId));
        dispatch(changeToggleFollowing(userId, false));
    };
};

export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(changeToggleFollowing(userId, true));
        let data = await userAPI.follow(userId);
        if (data.resultCode == 0)
            dispatch(followAC(userId));
        dispatch(changeToggleFollowing(userId, false));
    };
};

export default usersReducer;