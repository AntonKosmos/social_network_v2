import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '92443cb5-e90b-4e1a-83b1-b10dca160202'
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
        console.warn("refactor code!");
        return ProfileAPI.getUserProfile(userId)
    }
};

export const ProfileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    updateUserProfile(profileInfo) {
        return instance.put(`profile`, profileInfo).then(response => response.data)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, {status}).then(response => response.data)
    },
    saveProfilePhoto(photo) {
        let formData = new FormData(); // instantiate it
        // suppose you have your file ready
        formData.set('file', photo);
        return instance.put('/profile/photo', formData).then(response => response.data)
    }
};

export const authMe = {
    me() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login({email, password, rememberMe = true, captcha = null}) {
        return instance.post('auth/login', {email, password, rememberMe, captcha}).then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login').then(response => response.data)
    }
};

export const getCaptchaURL = {
    getCaptcha() {
        return instance.get('security/get-captcha-url').then(response => response.data)
    }
};
