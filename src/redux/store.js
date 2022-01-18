import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import friendsReducer from "./friends-reduser";

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, like: '10', text: 'tempor incididunt ut labore et dolore magna'},
                {id: 2, like: '0', text: 'exercitation'},
                {
                    id: 3,
                    like: '2',
                    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur s'
                },
            ],
            newPostText: 'Write what you wish',
        },
        messagesPage: {
            dialogs: [
                {id: 1, time: '1', count: '12', last: 'John', name: 'John'},
                {id: 2, time: '15', count: '3', last: 'Igor', name: 'Igor'},
                {id: 3, time: '43', count: '2', last: 'Andrew', name: 'Andrew'},
                {id: 4, time: '14', count: '5', last: 'Viktor', name: 'Viktor'},
                {id: 5, time: '2', count: '5', last: 'Mern', name: 'Mern'},
                {id: 6, time: '22', count: '6', last: 'Zed', name: 'Zed'},
                {id: 7, time: '23', count: '7', last: 'Kyle', name: 'Kyle'},
                {id: 8, time: '32', count: '1', last: 'Pups', name: 'Pups'},
            ],

            messages: [
                {id: 1, message: 'Hi!!!'},
                {id: 2, message: 'It\'s'},
                {id: 3, message: 'My first'},
                {id: 4, message: 'React app.'},
                {id: 5, message: 'And i see'},
                {id: 6, message: 'that everything'},
                {id: 7, message: 'is working.'},
                {id: 8, message: 'That\'s cool!!!'},
            ],

            defaultMessage: 'newTextMessage',
        },
        friendsPage: {
            friends: [
                {id: 1, firstName: 'John', lastName: 'Brick'},
                {id: 2, firstName: 'Wen', lastName: 'Space'},
                {id: 3, firstName: 'Cris', lastName: 'Break'},
                {id: 4, firstName: 'Sem', lastName: 'Trow'},
                {id: 5, firstName: 'Troy', lastName: 'Blabla'},
                {id: 6, firstName: 'Bet', lastName: 'Frick'},
                {id: 7, firstName: 'Net', lastName: 'Trick'},
                {id: 8, firstName: 'Fin', lastName: 'Took'},
                {id: 9, firstName: 'Jeck', lastName: 'Book'},
                {id: 10, firstName: 'Roy', lastName: 'Mook'},
                {id: 11, firstName: 'Bem', lastName: 'Tern'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

        this._callSubscriber(this._state);
    }
};






export default store;
