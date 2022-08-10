import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const { v1: uuid } = require('uuid');
    const [books, setBooks] = useState([
        {title: 'Dune', author: 'Frank Herbert', id: 1},
        {title: 'Wild Swans', author: 'Jung Chang', id: 2},
        {title: 'Girl woman other', author: 'Bernadine Evaristo', id: 3}
    ]);
    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuid()}])
    };
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    };
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;