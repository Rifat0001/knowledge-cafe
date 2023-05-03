// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
const Blog = (props) => {
    const { id, author_name, blog_title, cover_img, author_img, read_time } = props.blog;
    const handleBookMarked = props.handleBookMarked;
    const handleMarkasRead = props.handleMarkasRead;
    return (
        <div className='md:mb-16 mb-2'>
            <div className="card bg-base-100 ">
                <figure><img className="" src={cover_img} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex justify-start items-center gap-4">
                            <div className="left">
                                <div >
                                    <img className="md:w-20 md:h-20 w-12 h-12 rounded-full" src={author_img} />
                                </div>
                            </div>
                            <div>
                                <p className="md:text-xl text-xs md:font-semibold font-bold" >{author_name}</p>
                                <p className="md:text-sm text-xs">Mar 14 (4 Days ago)</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-center">
                            <div className="text">
                                <p className="text-sm me-4">{read_time} min read</p>
                            </div>
                            <div className="icon">
                                <button className='text-primary' onClick={() => handleBookMarked(props.blog)}><FontAwesomeIcon icon={faBookmark} /></button>
                            </div>
                        </div>
                    </div>
                    <h1 className="card-title md:text-3xl text-xl font-bold ">
                        {blog_title}
                    </h1>
                    <p>#beginners #programming</p>
                    <div className='text-start'>
                        <button onClick={() => handleMarkasRead(props.blog)} className='underline text-primary font-semibold '>Mark as read</button>
                    </div>

                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Blog;