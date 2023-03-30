import React, { useEffect, useState } from 'react';

const BlogsInfo = ({showTime, showMarked}) => {
    const [time, setTime] = useState(showTime);

    useEffect(()=>{
       const storageReadTime =  localStorage.getItem("readTime")
       setTime(storageReadTime)
       
    },[showTime])

    // marked Read
    const [read, setRead] = useState(showMarked);

    useEffect(()=>{
       const storageMarkedRead =  localStorage.getItem("markedRead")
       setRead(storageMarkedRead)
       
    },[showMarked])

    return (
        <div>
            <div className="card h-full bg-indigo-900 shadow-xl mt-10">
                <div className="card-body">
                    <div className='read-time border text-center px-4 py-4'>
                    <h2 className="card-title ">Spent time read: {time}</h2>
                    
                    </div>
                    <div className="card-actions w-80 h-60 border">
                        <h2>{read}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsInfo;