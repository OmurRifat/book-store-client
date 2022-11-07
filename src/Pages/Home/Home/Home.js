import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Banner from '../Banner/Banner';

const Home = () => {
    const { user } = useContext(AuthContext)
    console.log(user.name)
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;