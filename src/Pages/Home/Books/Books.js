import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
            <h2 className='text-2xl text-red-700 font-bold text-center bg-gray-100 py-4 shadow-xl rounded-xl'>New Collections of 2022🔥</h2>
            <div className=' grid grid-flow-row md:grid-cols-3 gap-y-10 mt-8'>
                {
                    books.map(book => <Book
                        key={ book._id }
                        book={ book }
                    ></Book>)
                }
            </div>
            <Link to='/allbooks' className='w-full flex justify-center'>
                <button type="button" className="w-1/2 md:w-1/5 shadow-lg mt-14 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">See All</button>
            </Link>
        </div>
    );
};

export default Books;