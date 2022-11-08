import React from 'react';
import img1 from '../../../assets/PopularAuthor/p1.jpg'
import img2 from '../../../assets/PopularAuthor/p2.jpg'
import img3 from '../../../assets/PopularAuthor/p3.jpg'
import img4 from '../../../assets/PopularAuthor/p4.jpg'
import img5 from '../../../assets/PopularAuthor/p5.jpg'
import img6 from '../../../assets/PopularAuthor/p6.jpg'

const PopularAuthor = () => {
    return (
        <div className='w-4/5 my-20 mx-auto'>
            <h2 className='text-2xl text-red-700 font-bold text-center bg-gray-100 py-4 rounded-t-xl'>Weekly Popular Authors🎉</h2>
            <div className='mt-1 grid grid-flow-row grid-cols-6 gap-6 bg-gray-100 px-10 rounded-b-xl'>
                <div className=" ">
                    <img className=' rounded-full mt-8 mb-4' src={ img1 } alt="" />
                    <p className='text-center mb-5 font-semibold text-red-600'>Author</p>
                </div>
                <div className=" ">
                    <img className=' rounded-full mt-8 mb-4' src={ img2 } alt="" />
                    <p className='text-center mb-5 font-semibold text-red-600'>Author</p>
                </div>
                <div className=" ">
                    <img className=' rounded-full mt-8 mb-4' src={ img3 } alt="" />
                    <p className='text-center mb-5 font-semibold text-red-600'>Author</p>
                </div>
                <div className=" ">
                    <img className=' rounded-full mt-8 mb-4' src={ img4 } alt="" />
                    <p className='text-center mb-5 font-semibold text-red-600'>Author</p>
                </div>
                <div className=" ">
                    <img className=' rounded-full mt-8 mb-4' src={ img5 } alt="" />
                    <p className='text-center mb-5 font-semibold text-red-600'>Author</p>
                </div>
                <div className=" ">
                    <img className=' rounded-full mt-8 mb-4' src={ img6 } alt="" />
                    <p className='text-center mb-5 font-semibold text-red-600'>Author</p>
                </div>
            </div>
        </div>
    );
};

export default PopularAuthor;