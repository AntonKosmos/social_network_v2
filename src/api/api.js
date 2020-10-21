import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5985ed13-d50a-4a8f-bad0-d3bfb7b7219b'
    }
});

export const userAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },

    getUserProfile(userId) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => response.data)
    }
};

export const authMe = {
    me() {
        return instance.get(`auth/me`).then(response => response.data)
    }
};
