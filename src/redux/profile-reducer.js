import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initialState = {
    posts: [
        {id: 1, like: '10', text: 'tempor incididunt ut labore et dolore magna', comment: [{com:'null1'}]},
        {id: 2, like: '0', text: 'ut labore et dolore magna', comment: [{com:'null2'}, {com:'nullZ'}]},
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                like: '0',
                text: action.post
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
};
export const addPost = (post) => ({type: ADD_POST, post});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => {
    return profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
};

export const getUserStatus = (userId) => (dispatch) => {
    return profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data));
        })
};
export const updateUserStatus = (status) => (dispatch) => {
    return profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        })
};

export default profileReducer;