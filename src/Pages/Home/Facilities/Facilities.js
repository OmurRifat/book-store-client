import React from 'react';
import img1 from '../../../assets/Feature/cod-small.svg'
import img2 from '../../../assets/Feature/delivery_icon.svg'
import img3 from '../../../assets/Feature/happy-return-big.svg'
import img4 from '../../../assets/Feature/call.svg'

const Facilities = () => {
    return (
        <div className='w-4/5 mx-auto mt-28 grid grid-flow-row grid-cols-4 py-20'>
            <div className="flex justify-center items-center">
                <img className=' w-14 mr-3' src={ img1 } alt="" />
                <div>
                    <h4>CASH ON DELIVERY</h4>
                    <p>Pay cash at your doorstep</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img className=' w-14 mr-3' src={ img2 } alt="" />
                <div>
                    <h4>DELIVERY</h4>
                    <p>All over Bangladesh</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img className=' w-14 mr-3' src={ img3 } alt="" />
                <div>
                    <h4>HAPPY RETURN</h4>
                    <p>7 days return facility</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img className=' w-14 mr-3' src={ img4 } alt="" />
                <div>
                    <h4>HELP: 16297 / 09609616297</h4>
                    <p>7 days a week</p>
                </div>
            </div>
        </div>
    );
};

export default Facilities;