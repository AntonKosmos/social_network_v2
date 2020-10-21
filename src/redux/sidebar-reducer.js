let initialStore = {
        bestFriendsItem: {
            friends: [
                {id: "1", name: "Anton"},
                {id: "2", name: "Vika"},
                {id: "3", name: "Dasha"},
            ]
        }
};

const sidebarReducer = (state = initialStore, action) => {
    return state;
};

export default sidebarReducer;