// import React from 'react';
import { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Blog from '../Blog/Blog';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="grid grid-cols-3 gap-4 px-16">
            <div className="col-span-2">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
            <Carts></Carts>
        </div>
    );
};

export default Home;