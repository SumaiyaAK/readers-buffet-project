import React from 'react';

const SingleBlog = ({ article, markedRead, readTime }) => {
    console.log(article)
    return (

        <div className="card w-full bg-indigo-900 shadow-xl mt-10">
            <figure>
                <img src={article.Blog_cover_image} alt="" />
            </figure>
            <div className="card-body">
                <div className='flex gap-96'>
                    <div className='author-info flex gap-2'>
                        <img className="w-10 h-10" src={article.Author_image} alt="Shoes" />
                        <h5 className='text-xl'>{article.Author_name}</h5>
                    </div>
                    <div className='flex justify-end'>
                        <p>{article.Read_time} min read</p>
                        <span onClick={() => markedRead(article.Blog_title)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                            </span>


                    </div>
                </div>
                <h2 className="card-title">{article.Blog_title}</h2>

                <div className="card-actions mt-4 cursor-pointer">
                    <a onClick={() => readTime(article.Read_time)}>Mark as read</a>
                </div>
            </div>
        </div>

    );
};

export default SingleBlog;