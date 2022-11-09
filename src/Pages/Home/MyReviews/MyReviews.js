import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyReview from '../MyReview/MyReview'

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user, setMyReviews])
    // console.log(myReviews)

    return (
        <div className="w-4/5 mx-auto my-20">
            {
                myReviews.length > 0 ?
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-10">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <tbody>
                                {
                                    myReviews.map(myReview => <MyReview
                                        key={ myReview._id }
                                        myReview={ myReview }
                                    ></MyReview>)
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <h6 className="text-center my-32">No reviews were added</h6>
            }
        </div>
    );
};

export default MyReviews;