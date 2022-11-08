import React from 'react';

const Review = ({ reviewDetails }) => {
    // console.log(review)
    const { picture, reviewerName, review, _id } = reviewDetails;
    // console.log(_id)
    return (
        <div> <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-10">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                            <img className="w-10 h-10 rounded-full" src={ picture } alt="Jese image" />
                            <div className="pl-3">
                                <div className="text-base font-semibold">{ reviewerName }</div>
                            </div>
                        </th>
                        <td className="py-4 px-6">
                            { review }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        </div>
    );
};

export default Review;