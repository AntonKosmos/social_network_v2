import {getUserStatus} from "./profile-reducer";

const  APP_INITIALIZATION_TYPE = "APP_INITIALIZATION_TYPE";

let initialStore = {
    initialization: false
};

const appReducer = (state = initialStore, action) => {
    switch (action.type) {
        case APP_INITIALIZATION_TYPE:
            return {
                ...state,
                initialization:true
            };
        default:
            return state;
    }
};

export const setInit = () => {
    return { type: APP_INITIALIZATION_TYPE };
};

//------------- THUNKS -------------

export const appInitialization = () => {
    return (dispatch) => {
        let promise = dispatch(getUserStatus());
        Promise.all([promise]).then(data=> {
            dispatch(setInit());
        });
    }
};

export default appReducer;