// import React from 'react';

import Cart from "../Cart/Cart";

const Carts = (props) => {
    const carts = props.carts;
    const time = props.time;
    console.log(time)

    return (
        <div className="col-span-1">
            <div className="top border-2 bg-indigo-100 border-violet-700 rounded my-2">
                <p className="py-2 font-bold text-indigo-500 text-center">Spent time on read : 0 min</p>
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