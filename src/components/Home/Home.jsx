// import React from 'react';
import Blogs from '../Blogs/Blogs';
import Carts from '../Carts/Carts';

const Home = () => {
    return (
        <div className="grid grid-cols-3 gap-4 px-16">
            <Blogs></Blogs>
            <Carts></Carts>
        </div>
    );
};

export default Home;