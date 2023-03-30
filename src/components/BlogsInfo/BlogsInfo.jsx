import React, { useEffect, useState } from 'react';

const BlogsInfo = ({showTime}) => {
    const [time, setTime] = useState(showTime);

    useEffect(()=>{
       const storageReadTime =  localStorage.getItem("readTime")
       setTime(storageReadTime)
       
    },[showTime])

    return (
        <div>
            <div className="card w-auto h-auto bg-indigo-900 shadow-xl mt-10">
                <div className="card-body">
                    <div className='read-time border text-center px-4 py-4'>
                    <h2 className="card-title ">Spent time read: {time}</h2>
                    
                    </div>
                    <div className="card-actions w-80 h-60 border">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsInfo;