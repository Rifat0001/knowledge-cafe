// import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    return (
        <div className=' bg-white m-4 rounded py-5 px-4'>
            <h2 className='font-bold text-start'> {cart.blog_title} </h2>
        </div>
    );
};

export default Cart;