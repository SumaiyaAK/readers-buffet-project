import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';


const Blogs = ({markedRead, readTime}) => {

    const [articles, setArticles] = useState([])
    
    useEffect(() => {
         fetch("data.json")
        .then((res) => res.json())
        .then((data) => setArticles(data))

    },[])

    return (
        <div>
            <div className='blogs-container '>
                {
                    articles.map((article) =>(
                        <SingleBlog readTime={readTime}
                        markedRead={markedRead}
                        article={article}></SingleBlog>
                        

                    ))
                }

            </div>
        </div>
    );
};

export default Blogs;