// import React from 'react';

import Cart from "../Cart/Cart";

const Carts = ({ carts, time }) => {
    let spent = 0;
    for (const duration of time) {
        spent = spent + parseInt(duration.read_time);
    }
    return (
        <div className="col-span-1">
            <div className="top border-2 bg-indigo-100 border-violet-700 rounded my-2">
                <p className="py-2 font-bold text-indigo-500 text-center">Spent time on read : {spent}  min</p>
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
    );
};

export default Carts;