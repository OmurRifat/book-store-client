import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
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
            <Helmet>
                <title>Home | Book Store</title>
            </Helmet>
            <Banner></Banner>
            <Books></Books>
            <DailyLifes></DailyLifes>
            <PopularAuthor></PopularAuthor>
            <Facilities></Facilities>
        </div>
    );
};

export default Home;