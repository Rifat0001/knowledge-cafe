// import React from 'react';
import { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Carts from '../Carts/Carts';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="grid grid-cols-3 gap-4 px-16">
            <Blogs>
                {
                    blogs.map(blog => <h1 key={blog.id}>hi</h1>)
                }
            </Blogs>
            <Carts></Carts>
        </div>
    );
};

export default Home;