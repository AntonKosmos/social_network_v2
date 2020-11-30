const LIKE_COUNTER = 'LIKE_COUNTER';
const DISLIKE_COUNTER = "DISLIKE_COUNTER";
const LOAD_MUSIC = "LOAD_MUSIC";

let initialStore = {
    musicArray: [
        {id: 1, name: "skillet", likeCount: 0},
        {id: 2, name: "TOR", likeCount: 0},
        {id: 3, name: "BRUTTO", likeCount: 0}
    ]
};

const musicReducer = (state = initialStore, action) => {
    switch (action.type) {
        case LIKE_COUNTER:
            return {
                ...state,
                musicArray: state.musicArray.map((mus) => {
                    if (mus.id === action.id) {
                        return {
                            ...mus,
                            likeCount: mus.likeCount + 1
                        }
                    }
                    return mus;
                })
            };
        case DISLIKE_COUNTER:
            return {
                ...state,
                musicArray: state.musicArray.map((mus) => {
                    if (mus.id === action.id) {
                        return {
                            ...mus,
                            likeCount: mus.likeCount - 1
                        }
                    }
                    return mus;
                })
            };
        case LOAD_MUSIC: {
            return {
                ////
            }
        }
        default:
            return state;
    }
};

export const setLikeMusicAC = (id) => {
    return {
        type: LIKE_COUNTER,
        id: id
    };
};

export const setDislikeMusicAC = (id) => {
    return {
        type: DISLIKE_COUNTER,
        id: id
    };
};

export const loadMusic = () => {
    return {
        type: LOAD_MUSIC
    };
};

export default musicReducer;