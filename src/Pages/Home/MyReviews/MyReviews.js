import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../../Context/AuthProvider';
import MyReview from '../MyReview/MyReview'

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([]);
    const [updater, setUpdater] = useState({})

    useEffect(() => {
        fetch(`https://book-store-server-nu.vercel.app/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('book-store-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => setMyReviews(data))
    }, [user, setMyReviews, updater])
    // console.log(updater)

    return (
        <div className="w-4/5 mx-auto my-20">
            <Helmet>
                <title>My Reviews | Book Store</title>
            </Helmet>
            {
                myReviews.length > 0 ?
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-10">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <tbody>
                                {
                                    myReviews.map(myReview => <MyReview
                                        key={ myReview._id }
                                        myReview={ myReview }
                                        setUpdater={ setUpdater }
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