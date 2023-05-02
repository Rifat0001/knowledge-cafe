// import React from 'react';
import { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Blog from '../Blog/Blog';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [carts, setCarts] = useState([]);
    const [time, setTime] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    const handleMarkRead = (data) => {
        const newData = [...carts, data];
        setCarts(newData);
    }
    const handleTimeCount = (data) => {
        const newData = [...time, data];
        setTime(newData);
    }
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 px-16">
            <div className="md:col-span-2 sm:col-span-1">
                {
                    blogs.map(blog => <Blog key={blog.id} handleTimeCount={handleTimeCount} handleMarkRead={handleMarkRead} blog={blog}></Blog>)
                }
            </div>
            <Carts className="col-span-1" carts={carts} time={time}></Carts>
        </div>
    );
};

export default Home;