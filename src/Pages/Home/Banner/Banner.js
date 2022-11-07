import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import img1 from '../../../assets/BannerImages/banner-1.webp'
import img2 from '../../../assets/BannerImages/banner-2.webp'
import img3 from '../../../assets/BannerImages/banner-3.webp'
import img4 from '../../../assets/BannerImages/banner-4.webp'
import './Banner.css'

const Banner = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    const slider = (
        <AutoplaySlider
            play={ true }
            cancelOnInteraction={ false } // should stop playing on user interaction
            interval={ 6000 }
        >
            <div data-src={ img1 } />
            <div data-src={ img2 } />
            <div data-src={ img3 } />
            <div data-src={ img4 } />
        </AutoplaySlider>
    );
    return (
        <div className='banner-container mb-20'>
            { slider }
        </div>
    );
};

export default Banner;