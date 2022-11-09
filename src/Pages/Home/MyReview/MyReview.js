import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const MyReview = ({ myReview }) => {
    // console.log(myReview)
    const [bookName, setBookName] = useState(null);
    const [deleteToast, setDeleteToast] = useState(false)
    const { bookId, review, _id } = myReview;
    const book = {}

    useEffect(() => {
        fetch(`https://book-store-server-nu.vercel.app/book/${bookId}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data[0].bookName)
                book.bookName = data[0].bookName;
                setBookName(book)
            })
    }, [bookId])

    const handleDelete = () => {
        // console.log(bookId)
        fetch(`https://book-store-server-nu.vercel.app/reviews/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Review Deleted Sucessfully")
                }

            })
    }
    // console.log(bookName.bookName)
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                {/* <img className="w-10 h-10 rounded-full" src={ picture } alt="Jese image" /> */ }
                <div className="pl-3">
                    <div className="text-base font-semibold">{ bookName?.bookName }</div>
                </div>
            </th>
            <td className="py-4 px-6">
                { review }
            </td>
            <td className="py-4 px-6">

                <div className="inline-flex rounded-md shadow-sm" role="group">
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