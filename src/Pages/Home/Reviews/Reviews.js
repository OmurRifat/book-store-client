import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Review from '../Review/Review';

const Reviews = ({ book }) => {
    const { user } = useContext(AuthContext)
    const { _id, bookName } = book
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://book-store-server-nu.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id, setReviews]);
    // console.log(reviews)

    const handleReview = (e) => {
        const date = new Date().toJSON();
        console.log(date)
        e.preventDefault();
        const from = e.target;
        // console.log(from)
        const review = from.review.value;
        const newReview = {
            picture: user?.photoURL,
            reviewerName: user?.displayName,
            review: review,
            bookId: _id,
            reviewerEmail: user?.email,
            date: date
        }
        fetch(`https://book-store-server-nu.vercel.app/reviews/${_id}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newReview),
        })
            .then(res => res.json())
            .then(data => console.log(data));

        const updatedReview = [...reviews, newReview]
        setReviews(updatedReview);
        from.reset();
        // console.log(newReview)
        // setAddReview(review);

    }
    // console.log(user)
    return (
        <div className='mb-20'>
            <h2 className='text-2xl text-gray-700 font-bold text-center bg-gray-100 py-4  rounded-t-xl'>Customers Review About <span className='text-3xl text-red-700'>"{ bookName }"</span></h2>
            {
                reviews.map(review => <Review
                    key={ review._id }
                    reviewDetails={ review }
                ></Review>)
                // <div>
                //     <h4 className='text-center mt-6 font-semibold text-red-500'>No review available right now.</h4>
                // </div>
            }
            { user?.uid ? <>
                <form onSubmit={ handleReview }>
                    <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                        <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                            <label htmlFor="review" name='review' className="sr-only">Your comment</label>
                            <textarea id="review" name='review' rows="4" className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a review..." required=""></textarea>
                        </div>
                        <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                            <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                Post Review
                            </button>
                            <div className="flex pl-0 space-x-1 sm:pl-2">
                                <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Attach file</span>
                                </button>
                                <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Set location</span>
                                </button>
                                <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Upload image</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <p className="ml-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>
            </>
                :
                <div className='my-10 text-lg text-center text-gray-700'>Want to Make a Review? <span className=' text-red-700 font-bold'><Link to='/login'>Log in</Link></span></div>
            }
        </div>
    );
};

export default Reviews;