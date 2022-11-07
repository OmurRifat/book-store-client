import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/homebooks')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    return (
        <div className='my-20 w-4/5 mx-auto'>
            <h2 className='text-2xl text-red-700 font-bold text-center bg-gray-100 py-4 shadow-xl rounded-xl'>New Collections of 2022</h2>
            <div className=' grid grid-flow-row grid-cols-3 mt-8'>
                {
                    books.map(book => <Book
                        key={ book._id }
                        book={ book }
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;