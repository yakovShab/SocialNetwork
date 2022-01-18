const SEND_MESSAGE = 'ADD-MESSAGE';

const initialState = {
    dialogs: [
        {id: 1, time: '1', count: '12', last: 'John', name: 'John'},
        {id: 2, time: '15', count: '3', last: 'Igor', name: 'Igor'},
        {id: 3, time: '43', count: '2', last: 'Andrew', name: 'Andrew'},
        {id: 4, time: '14', count: '5', last: 'Viktor', name: 'Viktor'},
        {id: 5, time: '2', count: '5', last: 'Mern', name: 'Mern'},
        {id: 6, time: '22', count: '6', last: 'Zed', name: 'Zed'},
        {id: 7, time: '23', count: '7', last: 'Kyle', name: 'Kyle'},
        {id: 8, time: '32', count: '1', last: 'Pups', name: 'Pups'}
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
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = action.messages;
            return {
                ...state,
                messages: [...state.messages, {id: 1, message: newMessage}],
            }

        default:
            return state;
    }
};

export const sendMessageCreator = (messages) => ({type: SEND_MESSAGE, messages});

export default messagesReducer;