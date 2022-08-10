import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = (props) => {
    const { books } = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>My reading list</h1>
            <p>I've got { books.length } books left to read</p>
        </div>
    );
}
 
export default Navbar
