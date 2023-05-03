// import React from 'react';
import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import { ToastContainer, toast } from 'react-toastify';
import Cart from '../Cart/Cart';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [carts, setCarts] = useState([]);
    const [readTimes, setReadTimes] = useState(0);
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
    const handleReadTime = (time) => {
        const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
        console.log(previousReadTime);
        if (previousReadTime) {
            const sum = previousReadTime + time;
            localStorage.setItem("readTime", sum);
            setReadTimes(sum);
        }
        else {
            localStorage.setItem("readTime", time);
            setReadTimes(time);
        }
    }
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 md:px-16 px-4">
            <div className="md:col-span-2 sm:col-span-1">
                {
                    blogs.map(blog => <Blog key={blog.id} handleReadTime={handleReadTime} handleBookMarked={handleBookMarked} blog={blog}></Blog>)
                }
            </div>
            <div className="col-span-1">
                <div className="top border-2 bg-indigo-100 border-violet-700 rounded my-2">
                    <p className="py-2 font-bold text-indigo-500 text-center">Spent time on read : {readTimes}  min</p>
                </div>
                <div className="contain bg-slate-100 rounded py-6">
                    <h2 className="font-bold ms-6">Bookmarked Blogs: {carts.length} </h2>
                    <div>
                        {
                            carts.map(cart => <Cart cart={cart} key={cart.id}></Cart>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;