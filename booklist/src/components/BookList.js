import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails.js'


const BookList = () => {
    const { books } = useContext(BookContext);
    return books.length ? (   
        <ul className="book-list">
            {books.map(book => {
                return (<BookDetails book={book} key={book.id} />)
            })}
        </ul>
    ) : (
        <div className="empty">No books in your list. Find something to read!</div>
    );
}
 
export default BookList;