// import {authAPI, userAPI} from "../components/api/api";
//
// const SET_USER_LOGIN = 'FOLLOW';
//
// const initialState = {
//     login: null,
//     password: null,
//     rememberMe: false,
// };
//
// const loginReducer = (state = initialState, action) => {
//
//     switch (action.type) {
//         case SET_USER_LOGIN:
//             return {
//                 ...state,
//                 ...action.data,
//                 isAuth: true,
//             }
//
//         default:
//             return state;
//
//     }
// };
//
//
// export const setUserLogin = (userId, email, login) => ({type: SET_USER_LOGIN, data: {userId, email, login}});
//
// export const getUserLogin = (formData) => (dispatch) => {
//     return userAPI.loginForm(formData)
//         .then(response => {
//             if (response.data.result === 0) {
//                 let {formData} = response.data.data;
//                 dispatch(setUserLogin(formData))
//             }
//         })
// }
// export default loginReducer;
//
