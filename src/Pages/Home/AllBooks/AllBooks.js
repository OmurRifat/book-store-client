import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import AllBook from '../AllBook/AllBook';

const AllBooks = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch('https://book-store-server-nu.vercel.app/allbooks')
            .then(res => res.json())
            .then(data => setAllBooks(data));
    }, [])
    return (
        <div className='mb-20 mt-10 w-4/5 mx-auto'>
            <Helmet>
                <title>All Books | Book Store</title>
            </Helmet>
            <h2 className='text-2xl text-red-700 font-bold text-center bg-gray-100 py-4 shadow-xl rounded-xl'>All Collections🔥</h2>
            <div className='grid grid-flow-row md:grid-cols-3 my-4 md:my-14 gap-y-4 md:gap-y-8 gap-x-4 md:gap-x-8'>
                {
                    allBooks.map(allbook => <AllBook
                        key={ allbook._id }
                        allbook={ allbook }
                    ></AllBook>)
                }
            </div>
        </div>
    );
};

export default AllBooks;