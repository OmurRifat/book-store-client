import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    const { user } = useContext(AuthContext)
    // console.log(user.name)
    return (
        <div>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;