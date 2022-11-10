import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const MyReview = ({ myReview, setUpdater }) => {
    // console.log(myReview)
    const [bookDetails, setBookDetails] = useState(null);
    const { bookId, review, _id } = myReview;
    const book = {}

    useEffect(() => {
        fetch(`http://localhost:5000/book/${bookId}`)
            .then(res => res.json())
            .then(data => {
                book.bookName = data[0].bookName;
                book.picture = data[0].picture;
                setBookDetails(book)
            })
    }, [bookId])

    const handleDelete = () => {
        // console.log(bookId)
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                setUpdater(data)
                if (data.acknowledged) {
                    toast.success("Review Deleted Sucessfully")

                }

            })
    }
    // console.log(bookName.bookName)
    return (
        <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="flex flex-col items-center py-4 px-6 text-gray-900 whitespace-wrap dark:text-white">
                <img className="w-10 h-10" src={ bookDetails?.picture } alt="Book Image" />
                <div className="pl-3">
                    <div className="text-base font-semibold">{ bookDetails?.bookName }</div>
                </div>
            </th>
            <td className="py-4 px-6">
                <p className=' '>
                    { review }
                </p>
            </td>
            <td className="py-4 px-6">

                <div className="flex flex-col md:flex-row rounded-md shadow-sm" role="group">
                    <button type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                        Update
                    </button>
                    <button onClick={ handleDelete } type="button" className=" bg-red-600 py-2 px-4 text-sm font-medium text-white b border-t border-b border-gray-200 hover:bg-red-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-white focus:text-white dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                        Delete
                        <Toaster />
                    </button>
                </div>

            </td>
        </tr>
    );
};

export default MyReview;