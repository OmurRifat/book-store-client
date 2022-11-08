import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import DailyLifes from '../DailyLifes/DailyLifes';
import Facilities from '../Facilities/Facilities';
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
            <Facilities></Facilities>
        </div>
    );
};

export default Home;