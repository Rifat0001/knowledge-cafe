// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
const Blog = (props) => {
    const { id, author_name, blog_title, cover_img, author_img, read_time } = props.blog;
    return (
        <div className='mb-16'>
            <div className="card bg-base-100 ">
                <figure><img className="" src={cover_img} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex justify-start items-center gap-4">
                            <div className="left">
                                <div >
                                    <img className="w-20 h-20 rounded-full" src={author_img} />
                                </div>
                            </div>
                            <div>
                                <p className="text-xl font-semibold" >{author_name}</p>
                                <p className="text-sm ">Mar 14 (4 Days ago)</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-center">
                            <div className="text">
                                <p className="text-sm me-2">{read_time} min read</p>
                            </div>
                            <div className="icon">
                                <button className='text-secondary'><FontAwesomeIcon icon={faBookmark} /></button>
                            </div>
                        </div>
                    </div>
                    <h1 className="card-title text-3xl font-bold ">
                        {blog_title}
                    </h1>
                    <p>#beginners #programming</p>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Blog;