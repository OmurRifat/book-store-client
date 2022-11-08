import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import DailyLifes from '../DailyLifes/DailyLifes';
import PopularAuthor from '../PopularAuthor/PopularAuthor';

const Home = () => {
    const { user } = useContext(AuthContext)
    // console.log(user.name)
    return (
        <div>
            <Banner></Banner>
            <Books></Books>
            <DailyLifes></DailyLifes>
            <PopularAuthor></PopularAuthor>
        </div>
    );
};

export default Home;