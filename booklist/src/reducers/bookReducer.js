export const bookReducer = (state, action) => {
    const { v1: uuid } = require('uuid');
    switch(action.type) {
        case 'ADD_BOOK':
            return [...state, {
                    title: action.book.title,
                    author: action.book.author,
                    id: uuid()
                }]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)
        default:
            return state;
    }
}