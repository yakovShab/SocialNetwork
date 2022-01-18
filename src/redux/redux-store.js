import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import friendsReducer from "./friends-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";
import loginReducer from "./loginReducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    login: loginReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;