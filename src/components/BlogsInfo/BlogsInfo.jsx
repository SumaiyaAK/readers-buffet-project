import React, { useEffect, useState } from 'react';

const BlogsInfo = ({ showTime, showMarked }) => {


    console.log(showMarked);

    const [time, setTime] = useState(showTime);

    useEffect(() => {
        const storageReadTime = localStorage.getItem("readTime")
        setTime(storageReadTime)

    }, [showTime])

    // marked Read
    const [read, setRead] = useState(showMarked);

    const [readCount, setReadCount] = useState(0);

    useEffect(() => {
        const storageReadTime = localStorage.getItem("markedRead");

        if (storageReadTime.length > 0) {
            setRead(JSON.parse(storageReadTime));
        }


    }, [showMarked])

    console.log(showMarked);


    return (
        <div>
            <div className="card h-full bg-indigo-900 shadow-xl mt-10">
                <div className="card-body">
                    <div className='read-time border text-center px-4 py-4'>
                        <h2 className="card-title ">Spent time on read: {time} min</h2>

                    </div>
                    <div className="card-actions w-80 h-60 border">
                        <h2 className='text-2xl p-5'>Bookmarked Blogs : {readCount}</h2>
                        <ul>
                            {read.map((readBook) => (
                                <li key={readBook}>{readBook}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsInfo;