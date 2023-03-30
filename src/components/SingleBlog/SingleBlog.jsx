import React from 'react';

const SingleBlog = ({article}) => {
    console.log(article)
    return (
        
            <div className="card w-96 bg-indigo-900 shadow-xl mt-10">
                <figure>
                    <img src={article.Blog_cover_image} alt="" />
                    </figure>
                <div className="card-body">
                    <div className='flex gap-20'>
                        <div className='author-info flex gap-2'>
                        <img className="w-10 h-10" src={article.Author_image} alt="Shoes" />
                        <h5 className='text-xl'>{article.Author_name}</h5>
                        </div>
                        <div>
                            <span>{article.Read_time} min read</span>
                        </div>
                    </div>
                    <h2 className="card-title">{article.Blog_title}</h2>
                    
                    <div className="card-actions mt-4 cursor-pointer">
                        <a>Mark as read</a>
                    </div>
                </div>
            </div>
        
    );
};

export default SingleBlog;