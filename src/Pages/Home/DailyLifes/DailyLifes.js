import React from 'react';
import img1 from '../../../assets/DailyLifes/daily-1.webp'
import img2 from '../../../assets/DailyLifes/daily-2.webp'
import img3 from '../../../assets/DailyLifes/leather-wallet.jpg'

const DailyLifes = () => {
    return (
        <div className='w-4/5 my-20 mx-auto'>
            <h2 className='text-2xl text-red-700 font-bold text-center bg-gray-100 py-4 rounded-t-xl'>Daily Lifes✨</h2>
            <div className='bg-gray-100 grid grid-flow-row grid-cols-3 gap-8 py-4 px-2 mt-1 rounded-b-lg'>
                <div>
                    <img className='rounded-xl' src={ img1 } alt="" />
                </div>
                <div>
                    <img className='rounded-xl' src={ img2 } alt="" />
                </div>
                <div>
                    <img className='rounded-xl' src={ img3 } alt="" />
                </div>
            </div>
        </div>
    );
};

export default DailyLifes;