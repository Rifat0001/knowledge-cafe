// import React from 'react';
import { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Blog from '../Blog/Blog';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [carts, setCarts] = useState([]);
    const [time, setTime] = useState([]);
    const [ids, setIds] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    const handleBookMarked = (data) => {
        const newData = [...carts, data];
        setCarts(newData);
        const newId = [...ids, data.id]
        if (!ids.includes(data.id)) {
            ids.push(newId)
        }
        else {
            toast("You Have Already Bookmarked This Blog")
        }
        setIds(newId)
    }
    const handleMarkasRead = (data) => {
        const newData = [...time, data];
        setTime(newData);
    }
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 md:px-16 px-4">
            <div className="md:col-span-2 sm:col-span-1">
                {
                    blogs.map(blog => <Blog key={blog.id} handleMarkasRead={handleMarkasRead} handleBookMarked={handleBookMarked} blog={blog}></Blog>)
                }
            </div>
            <Carts className="col-span-1" carts={carts} time={time}></Carts>
        </div>
    );
};

export default Home;