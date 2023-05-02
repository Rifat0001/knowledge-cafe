// import React from 'react';

const Header = () => {
    return (
        <div >
            <div className="navbar bg-base-100 container mx-auto px-12">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-3xl font-bold ">Blog Cafe</a>
                </div>
                <div className="flex-none pe-3">

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1683026198~exp=1683026798~hmac=8d6561bc3fb8d7a978a4ec8492fd98dc4e11e26f1a4c7d5428561191427beab8" />
                            </div>
                        </label>
                    </div>
                </div>

            </div>
            <div className='mx-16 my-4'>
                <hr />
            </div>
        </div>

    );
};

export default Header;